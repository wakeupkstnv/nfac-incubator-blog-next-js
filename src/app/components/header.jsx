import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-6 px-6 md:px-10 rounded-lg border-opacity-100 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <img src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" alt="Logo" className="h-8 w-8" /> */}
          <span className="text-2xl font-bold font-mono transition hover:text-gray-400">Nfactorial Blog</span>
        </Link>
        <nav className="flex items-center gap-6 text-xl font-mono">
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
    </header>
  );
};

export default Header;
