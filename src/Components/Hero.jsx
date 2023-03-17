import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green font-bold p-2">
          GROWING WITH QUANTUM COMPUTING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
        <p className="md:text-5xl sm:text-4xl py-4 text-xl font-bold">
          Research, Inn for Big data
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl md:pl-4 pl-2 text-xl font-bold"
          strings={['JS', 'DevOP', 'ML']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-600'>Develop your serverless platform worth millions of packages.</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black'>Get started</button>
      </div>
    </div>
  );
};

export default Hero;
