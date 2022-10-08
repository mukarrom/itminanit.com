import React from 'react';
import { motion } from 'framer-motion';
import vector1 from '../../assets/vector/vector-art-1.png';
import './Banner.css';

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
          <h5
            className="text-[calc(0.375rem+1.5vw)] leading-10 text-[#F02EB5] font-semibold creative-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A Trusted Software Company
          </h5>
          <h1
            className="text-[calc(1.375rem+2vw)] leading-4 font-extrabold ki-animate font-hard pt-10"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            খিদমা আইটি
          </h1>
        </div>
        <p
          className="max-w-lg text-center lg:text-justify font-kalpurush text-xl"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ। প্রযুক্তির এই যুগে সফটওয়্যারের
          ব্যবহার আমাদের নিত্য জীবন অনেক সহজ সুন্দর এবং আকর্ষনীয় করে তুলেছে। তাই
          এই প্রযুক্তির যুগে আপনাদের জীবনকে আরো সুন্দর এবং সহজ করার জন্য আমরা
          নিয়ে এসেছি ডাইনামিক পদ্বতির ম্যানেজমেন্ট সফটওয়্যার এবং ওয়েবসাইট, যা
          ব্যবহার করে আপনাদের দৈনন্দিন জীবনের বিভিন্ন ধরনের হিসাব নিকাশ,
          আয়-ব্যয়সহ শিক্ষাখাত আরো সমৃদ্ধ হবে। যার ফলে সকল প্রকার কাজ দ্রুততম
          সময়ে করা যাবে, যেকোন সময়ে, যেকোন স্থান থেকে।
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
