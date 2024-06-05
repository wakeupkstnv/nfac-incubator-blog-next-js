import React from 'react';

const Card = ({ date, author, title, description }) => {
  return (
    <div className='shadow-xl rounded-lg overflow-hidden transition hover:scale-105 cursor-pointer md:w-96 md:h-56 w-96 h-60'>
      <div className='bg-gray-800 text-white p-4 w-auto h-20 flex items-center justify-center'>
        <div className='w-full max-w-sm font-mono text-center'>
          <div className='font-extrabold md:text-2xl'>{author}</div>
        </div>
      </div>
      <div className='p-6 bg-white font-mono'>
        <div className='text-slate-900'>{title}</div>
        <div className='text-slate-900 py-10'>{date}</div>
      </div>
    </div>
  );
}

export default Card;
