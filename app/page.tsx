import React from 'react'
import HomeI from '../public/Images/Layer_1.png'
import Image from 'next/image';
import Scroll from '../public/Components/Scroll/Scroll'
import Link from 'next/link';

const Home = () => {
  return (
    <div className='grid grid-rows-[150px,400px,100px] bg-[#ECECEC]'>
    <Link href="/Login" className='flex justify-end text-yellow-600'> Next&gt;&gt;</Link>
      {/* <div className='flex justify-end'>Next&gt;&gt;</div> */}
      <div className='space-y-6'>
      <div className='flex justify-center '>
        <Image src={HomeI} alt='HomeI ' className='h-36 w-36'/>
      </div>
      <div className='flex justify-center text-xl text-yellow-700 font-[Montaga]'>The Heritage</div>
      </div>
      <Scroll/>
    </div>
  )
}

export default Home
