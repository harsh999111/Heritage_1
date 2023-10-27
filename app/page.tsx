import Link from 'next/link';
import Image from 'next/image';
import Scroll from '../public/Components/Scroll/Scroll';

export default function Home() {
  return (
    <div className=''>
      <div className='flex justify-end'>
        <Link href="/Login" className='text-yellow-600'>
          Next>>
        </Link>
      </div>
      <div className="flex justify-center mt-8 md:mt-[-20px] lg:mt-8 ">
        <Image src="/Images/Layer_1.png" width="160" height="120" alt="Logo" className='md:h-52 md:w-52 lg:h-60 lg:w-60' />
      </div>
      <span className='font-Montaga flex justify-center mt-4 text-2xl text-yellow-800 md:text-4xl md:mt-2 lg:text-5xl'>
        The Heritage
      </span>
      <div className='mt-12'>
        <Scroll />
      </div>
    </div>
  );
}
