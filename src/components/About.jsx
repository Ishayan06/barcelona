import React from 'react';

function About() {
  return (
    <div className='bg-blue-950 h-[100vh] flex flex-col items-center'>
      <div className="backdrop-blur-sm mt-32 bg-gray-400/20 p-8 space-x-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl h-auto md:h-[70vh] rounded-xl border border-gray-500/30 shadow-2xl">
        <div className="image mb-8 md:mb-0 md:ml-8 flex-shrink-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/414/712/non_2x/fc-barcelona-logo-on-transparent-background-free-vector.jpg"
            alt="FC Barcelona Logo"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="content max-w-2xl text-center md:text-left text-gray-100 text-base md:text-lg lg:text-xl leading-relaxed">
          <p className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-xs">
          Founded in 1899 by a group of Swiss, Catalan, German, and English footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club" ("More than a club"). Unlike many other football clubs, the supporters own and operate Barcelona. It is the third-most valuable football club in the world, worth $5.6 billion, and the world's fourth richest football club in terms of revenue, with an annual turnover of €800.1 million.className The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs.Barcelona traditionally play in dark shades of blue and garnet stripes, hence nicknamed Blaugrana.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
