import React from 'react';
import Image from 'next/image';
import './Scroll.css'
import Tajmhal from '../../Images/tajmahal.png';
import hawamahal from '../../Images/hawa-mahal.png';
import jultaminara from '../../Images/jhulta-minar.png';
import gateway from '../../Images/gateway-of-india.png';
import hawamhel from '../../Images/hawa-mahal.png';

const logos = [
  { src: Tajmhal, alt: 'Taj Mahal' },
  { src: hawamahal, alt: 'Hawa Mahal' },
  { src: jultaminara, alt: 'Jhulta Minar' },
  { src: gateway, alt: 'Gateway of India' },
  { src: hawamhel, alt: 'Hawa Mahal' },
];

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                // className={logo.className}
                width={250} // Set the width as needed
                height={280} // Set the height as needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
