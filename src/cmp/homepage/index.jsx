import React from 'react';
import Navbar from "../navbar/index";
const index = () => {
  return (
    <div className=' mx-16 felx grid-cols-3 justify-center'>
    <div><Navbar/></div>
    <div className=' flex justify-center mt-4 grid-flow-row'>
      <img src='/fillup_form.svg' alt='Homepage' className='max-h-96'/>
    </div>
    <div className='flex justify-center mt-4'>
      <button className='border p-2 bg-[#1976D2] rounded-full font-semibold text-2xl font-serif text-white'><a href='/tna_form'>CREATE TNA FORM</a></button>
      </div>
      <footer>
        <div className='rop-shadow-2xl mb-2'></div>
      </footer>
    </div>
  )
};

export default index;