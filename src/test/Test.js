import { motion } from 'framer-motion';
import './Test.css';
import vector1 from '../assets/vector/vector-art-1.png';
import Navbar from '../components/Navigation/Navbar';

function Test() {
  return (
    <div className="w-full h-full test-bg flex flex-col justify-center items-center gap-y-10">
      <div className="w-full mt-10 px-4 transition-all ease-in-out duration-1000">
        <Navbar />
      </div>
      <div className="wrap-banner flex flex-col md:flex-row items-center justify-between w:full lg:w-3/4 mb-16">
        <motion.div
          animate={{ x: [30, 0, 30] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="banner-image w-8/12 lg:w-1/2 flex justify-center"
        >
          <img src={vector1} alt="Banner" className="w-full" />
        </motion.div>
        <div className="text-white w-full lg:w-1/2 px-4 mdMax:mt-16">
          <h5 className="text-center md:text-start text-xl  text-[#F02EB5] font-semibold creative-animate">
            A Trusted Company
          </h5>
          <h2
            className="text-center md:text-start text-[calc(1.375rem+2vw)] leading-4 font-extrabold ki-animate font-hard mt-6 mb-8"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            খিদমা আইটি
          </h2>
          <p
            className="max-w-lg text-justify lg:text-justify font-kalpurush text-xl"
            // data-aos="zoom-in"
            // data-aos-duration="500"
            // data-aos-delay="100"
          >
            বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ। প্রযুক্তির এই যুগে সফটওয়্যারের
            ব্যবহার আমাদের নিত্য জীবন অনেক সহজ সুন্দর এবং আকর্ষনীয় করে তুলেছে।
            তাই এই প্রযুক্তির যুগে আপনাদের জীবনকে আরো সুন্দর এবং সহজ করার জন্য
            আমরা নিয়ে এসেছি ডাইনামিক পদ্বতির ম্যানেজমেন্ট সফটওয়্যার এবং
            ওয়েবসাইট, যা ব্যবহার করে আপনাদের দৈনন্দিন জীবনের বিভিন্ন ধরনের হিসাব
            নিকাশ, আয়-ব্যয়সহ শিক্ষাখাত আরো সমৃদ্ধ হবে। যার ফলে সকল প্রকার কাজ
            দ্রুততম সময়ে করা যাবে, যেকোন সময়ে, যেকোন স্থান থেকে।
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              className="py-3 px-8 bg-[#03a9f5] rounded-full hover:bg-white hover:text-black"
            >
              আরো জানুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
