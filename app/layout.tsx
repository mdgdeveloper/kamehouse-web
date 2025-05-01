import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Optional: for Tailwind usage
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Optional: specify weights
});


export const metadata: Metadata = {
  title: "KameHouse Minecraft Server",
  description: "Unete a la aventura",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
