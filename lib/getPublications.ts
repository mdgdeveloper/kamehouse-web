import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/publications");

export async function getAllSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getPublicationBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter: data as { title: string; date: string; description: string; image: string },
    content: contentHtml,
  };
}


export async function getAllPublications() {
  const slugs = getAllSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPublicationBySlug(slug);
      return post!;
    })
  );

  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}