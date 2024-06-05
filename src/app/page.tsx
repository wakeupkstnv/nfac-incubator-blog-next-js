import React from 'react';
import Card from './components/Card';
import data from './data/data.json';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='py-10 md:py-20 flex flex-col items-center justify-center px-4 py-[8rem] md:py-[10rem]'>
        <div className='shadow-2xl w-full sm:w-3/4 max-w-4xl h-auto flex flex-col items-center justify-center p-5 md:p-10 bg-white rounded-lg'>
          <h1 className='text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 font-mono text-center'>Начните головокружительную карьеру в ИТ</h1>
          <h3 className='text-lg md:text-xl font-medium font-mono text-center'>Наши выпускники успешно работают в Apple, Google, Facebook</h3>
          <img className='w-full md:w-auto h-auto py-5 rounded-xl md:py-16' style={{ borderRadius: '1rem' }} src='https://framerusercontent.com/images/Sb8xCdXQSLVFmXq8vt87LZTDQ.jpg' alt='Career in IT' />
        </div>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-12 p-5">
          <Card
            author="Наши достижения"
            title="Наш курс предоставляет глубокие знания и практические навыки в IT, что позволяет вам быть готовыми к реальным вызовам в индустрии." date={undefined} description={undefined}          />
          <Card
            author="Успехи наших выпускников"
            title="Наши выпускники работают в ведущих IT-компаниях мира, таких как Apple, Google, и Facebook." date={undefined} description={undefined}          />
          <Card
            author="Что вы получите на курсе"
            title="Интерактивные занятия, актуальные знания, поддержка преподавателей и возможность работать над реальными проектами. Всё это поможет вам стать востребованным специалистом." date={undefined} description={undefined}          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12 p-5">
          <Card
            author="Отзывы наших студентов"
            title="Наши студенты отмечают высокое качество преподавания, дружелюбную атмосферу и практическую направленность курса." date={undefined} description={undefined}          />
          <Card
            author="Поддержка после окончания"
            title="Мы продолжаем поддерживать наших выпускников и после окончания курса, помогая им в трудоустройстве и развитии карьеры." date={undefined} description={undefined}          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
