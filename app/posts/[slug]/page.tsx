import { notFound } from "next/navigation";
import { getPublicationBySlug } from "@/lib/getPublications";
import Image from "next/image";

// Import styles
import styles from "./Post.module.css"

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const post = await getPublicationBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className={`-mt-64 sm:-mt-72 md:-mt-96 z-20 relative max-w-[1250px] mx-auto flex flex-col md:flex-row gap-5 px-4 sm:px-6 items-center ${styles.container}`}>
      <div className="flex-grow py-4 sm:px-10 rounded-lg bg-stone-900">
        <div className="w-full flex justify-center items-start mt-5 ">
          {/* Use a responsive wrapper with aspect ratio */}
          <div className="relative w-11/12 aspect-[16/9]"> {/* or aspect-[4/3], etc. */}
            <Image
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              fill
              className="object-contain" // maintain aspect ratio, no crop
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="p-8">
          <div className="text-sm bg-green-600/40 inline-block px-3 py-1 mb-1 rounded-lg opacity opacity-70">
            {new Date(post.frontmatter.date).toLocaleDateString()}
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-green-600 pb-2">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>

  );
}