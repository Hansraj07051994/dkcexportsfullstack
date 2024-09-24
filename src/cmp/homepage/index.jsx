import React from 'react';
import Navbar from "../navbar/index";

const Index = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between md:h-screen mx-4 sm:mx-8 md:mx-16'>
      {/* Navbar */}
      <div className='w-full'>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className='flex-grow flex flex-col justify-center items-center'>
        <div className='flex justify-center mt-4 md:mt-0'>
          <img src='/fillup_form.svg' alt='Homepage' className='max-h-96 w-full sm:max-w-md md:max-w-lg lg:max-w-xl' />
        </div>

        <div className='flex justify-center mt-4'>
          <button className='border p-2 bg-[#1976D2] rounded-full font-semibold text-xl sm:text-2xl font-serif text-white'>
            <a href='/tna_form'>CREATE TNA FORM</a>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className='w-full mt-8'>
        <div className='drop-shadow-2xl mb-2'></div>
      </footer>
    </div>
  );
};

export default Index;
