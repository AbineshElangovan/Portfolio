import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abinesh E | Portfolio',
  description: 'Personal Portfolio of Abinesh Elangovan - Full Stack Developer specializing in Next.js, TypeScript, Shopify, Prisma, and PostgreSQL.',
  keywords: ['Abinesh', 'Portfolio', 'Full Stack Developer', 'Next.js', 'TypeScript', 'Shopify', 'Prisma', 'PostgreSQL', 'React', 'Python', 'Networking'],
  authors: [{ name: 'Abinesh E' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}
