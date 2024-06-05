import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Blog() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center mb-4 md:mb-5 py-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 p-10">
          {data.map(item => (
            <Link key={item.id} href={"/blog/" + item.id}>

                <Card
                  date={item.date}
                  author={item.author}
                  title={item.title}
                  description={item.description}
                />

            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
