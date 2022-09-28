import React, { useState } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import shape8 from '../../assets/shap/shape-8.png';
import shape7 from '../../assets/shap/shape-7.png';
import HeroCard from './HeroCard';
import 'aos/dist/aos.css';

function Banner() {
  const [scrolling, setScrolling] = useState(false);
  AOS.init();
  const scrollEvent = () => {
    if (window.scrollY >= 150) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener('scroll', scrollEvent);
  return (
    <div className="gradient-bg1 w-full lg:h-screen text-white relative overflow-hidden z-10">
      <div className="">
        <div
          className={
						scrolling
						  ? 'px-4 z-[1000] fixed top-0 w-full gradient-bg2 transition duration-1000 delay-1000'
						  : 'mt-10 px-4 z-[1000] relative w-full transition duration-1000 delay-1000'
					}
					// data-aos={bg ? 'fade-down' : null}
					// data-aos-easing={bg ? 'linear' : null}
          // data-aos-duration={scrolling ? '1000' : null}
        >
          <Navbar />
        </div>
        <div className="w-[48vw] absolute  top-[-16vw] left-[-20vw] hidden lg:block">
          <img src={shape8} alt="" className="w-full" />
        </div>
        <div className="w-[35vw] absolute lg:right-[-26vw] bottom-[1.5vw] hidden lg:block">
          <img src={shape7} alt="" className="w-full" />
        </div>
        <div>
          <HeroCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
