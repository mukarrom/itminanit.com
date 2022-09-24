import React from 'react';
import Navbar from '../Navbar/Navbar';
import shape8 from '../../assets/shap/shape-8.png';
import shape7 from '../../assets/shap/shape-7.png';
import HeroCard from './HeroCard';

function Banner() {
  return (
    <div className="gradient-bg1 w-full lg:h-screen text-white relative overflow-hidden">
      <div className="">
        <Navbar />
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
