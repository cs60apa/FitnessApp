import React from 'react'

const News = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optmize your flow</h1>
          <p>Signup to our news letter and stay updated.</p>
        </div>
        <div className='my-4'>
    <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
      <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your Email' />
      <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium ml-4 my-6 px-6 py-3 text-black'>Notify me</button>
    </div>
    <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy policy</span></p>

        </div>

      </div>
      
    </div>
  )
}

export default News
