import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/images/tajmahal.png', alt: 'Taj Mahal', className: 'mt-16' },
  { src: '/images/hawa-mahal.png', alt: 'Hawa Mahal' },
  { src: '/images/jhulta-minar.png', alt: 'Jhulta Minar' },
  { src: '/images/india-gate.png', alt: 'India Gate' },
  { src: '/images/gateway-of-india.png', alt: 'Gateway of India' }
];

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="logos">
        <marquee className="logos-slide" behavior="scroll" direction="left" scrollamount="13">
          <div className="flex ">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
                width={150}  // Set the width as needed
                height={180}  // Set the height as needed
              />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Scroll;
