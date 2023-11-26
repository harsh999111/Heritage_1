import React from 'react';
import Taj from "../../public/Images/tajmahlbording.png";
import Taj1 from "../../public/Images/tajmahalbording1.png";
import Image from 'next/image';
import Link from 'next/link';
import './Boarding1.css';

const Boarding = () => {
  return (
    <div className='bg-yellow-100 h-full w-full mr-0 p-0 pb-10 sm:pb-7 md:pb-5 2xl:pb-7'>
      <div className="main-boarding">
        <p className='pt-0 text-center text-2xl text-red-400 sm:pt-6 md:pt-4 lg:text-4xl lg:pt-4  xl:pt-6 ' style={{ fontFamily: 'Gabriela' }}>Taj Mahal </p>
        <div className="main-1 pt-8 pb-0 sm:pt-1 sm:pb-0  md:pt-0 md:pb-0 lg:px-16 xl:px-[40px]  xl:pt-5">
          <div className="2xl:flex 2xl:justify-center">
            <Image src={Taj} alt='Taj' className='md:h-96 lg:h-[320px] lg:w-[900px] xl:h-[450px]  xl:w-[1300px] 2xl:h-[400px] 2xl:w-[1100px]' />
          </div>
          <div className="2xl:flex 2xl:justify-center"   style={{ background: 'linear-gradient(180deg, #B6E8D9 1.81%, rgba(182, 232, 217, 0.00) 33.68%)' }}>
            <Image src={Taj1}  alt='Taj1' className='lg:h-[320px] lg:w-[900px] xl:h-[400px] xl:w-[1300px] 2xl:h-[250px] 2xl:w-[1100px]'/>
          </div>
        </div>
        <div className="main-2">
          <p style={{ fontFamily: 'Gabriela' }} className='px-2  pl-4 pt-4 text-2xl sm:text-center sm:pt-3 md:pt-0 lg:text-4xl lg:pt-3 xl:text-5xl '>About Us</p>
          <p style={{ fontFamily: 'Gabriela' }} className='text-lg pl-4 pt-5 px-2 md:pt-2 lg:text-xl lg:px-10 xl:text-3xl 2xl:px-14'>The Heritage was created with the aim of promoting cultural heritage tourism and providing a platform for people to connect with their roots.</p>
        </div>
        <div className="btn pt-[20px] sm:pt-6 md:pt-2 lg:pt-5  lg:px-6 xl:text-2xl xl:pt-9 2xl:pt-4 2xl:px-8">
          <Link href="/Bording" className='relative -right-4 '>&lt;&lt; Previous</Link>
          <Link href="/Bording2" className='-right-[170px] relative sm:-right-[450px] md:-right-[600px] lg:-right-[800px] xl:-right-[1030px] 2xl:-right-[1400px]'>Next &gt;&gt;</Link>
        </div>
      </div>
    </div>
  );
}

export default Boarding;
