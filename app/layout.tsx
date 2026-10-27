import type { Metadata } from 'next';
import { Footer } from '../src/components/Footer';
import { Navbar } from '../src/components/Navbar';
import { ScrollToTop } from '../src/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fatema Akter | Full Stack Developer Portfolio',
  description:
    'Official portfolio of Fatema Akter - Full Stack Web Developer specializing in React.js, Node.js, Express.js, MongoDB, and modern web application development.',
  keywords: [
    'Fatema Akter',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'MongoDB',
    'Web Developer Chittagong',
    'Bangladesh',
    'Portfolio',
  ],
  authors: [{ name: 'Fatema Akter' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: 'https://github.com/sumi226',
    title: 'Fatema Akter | Full Stack Developer Portfolio',
    description:
      'Building Modern, Responsive & Scalable Web Applications with React, Node.js, and MongoDB.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-950 text-slate-100 font-sans selection:bg-primary/30 selection:text-primary-light antialiased overflow-x-hidden min-h-screen">
        <ScrollToTop />
        <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col antialiased selection:bg-sky-500/30 selection:text-sky-200">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
