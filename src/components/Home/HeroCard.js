import React from 'react';
import { motion } from 'framer-motion';
import vector1 from '../../assets/vector/vector-art-1.png';

function HeroCard() {
  return (
    <div className="max-w-9/12 flex justify-center items-center space-x-14 mt-6 mx-6 lg:ml-44 mb-16">
      <div className="w-80 hidden lg:block">
        <motion.div
          animate={{ x: [30, -20, 30] }}
          transition={{ repeat: Infinity, duration: 10 }}
          spring
        >
          <img src={vector1} alt="" className="w-full" />
        </motion.div>
      </div>
      <div className="space-y-10 text-center lg:text-left">
        <div className="space-y-4">
          <h1
            className="text-[calc(1.375rem+2vw)] leading-10 text-pink font-extrabold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Creative
          </h1>
          <h1
            className="text-[calc(1.375rem+2vw)] leading-10 font-extrabold"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Digital Agency
          </h1>
        </div>
        <p
          className="max-w-lg text-center lg:text-justify"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          voluptatem adipisci, molestias repudiandae officiis odio illo quasi
          fugit.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button
            type="button"
            className="py-3 px-8 bg-[#03a9f5] rounded-full hover:bg-white hover:text-black"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
