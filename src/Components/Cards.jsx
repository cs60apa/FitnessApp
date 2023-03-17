import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$100</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 px-6 py-3 text-black">Start Trial</button>
        </div>
        <div className="bg-gray-300 w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="Double"
          />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold'>$200</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
            <p className='py-2 border-b mx-8'>2 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 4GB</p>
          </div>
          <button className="text-white bg-black w-[200px] rounded-md mx-auto font-medium my-6 px-6 py-3 text-black">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Triple"
          />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold'>$300</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1500 GB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 6GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 px-6 py-3 text-black">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
