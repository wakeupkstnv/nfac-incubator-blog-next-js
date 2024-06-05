import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold font-mono transition hover:text-gray-400">
            Nfactorial Blog
          </Link>
          <p className="mt-2 text-gray-400">Empowering your IT career</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <nav className="flex gap-6 text-lg font-mono">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>

        </div>
      </div>
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nfactorial Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
