import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import vector2 from '../../assets/vector/vector-art-2.png';

const TEXTS = ['সফটওয়্যার', 'ওয়েবসাইট'];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      // eslint-disable-next-line no-shadow
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  // console.log(index % TEXTS.length);
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="w-full"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p
            className=""
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            We are trusted company
          </p>
          <h1
            className="h2 font-bold font-kalpurush text-[#3363f4]"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            {/* text cange animation library: https://www.npmjs.com/package/react-text-transition */}
            আপনাদের প্রতিষ্ঠানের জন্য আমরা তৈরি করছি আকর্ষনীয়
            {' '}
            <TextTransition inline springConfig={presets.gentle}>
              <span className="text-[#7004bc]">
                {TEXTS[index % TEXTS.length]}
              </span>
            </TextTransition>
          </h1>
          <p
            className="mb-5 font-kalpurush text-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <span className="text-[#7004bc]">খিদমা আইটি</span>
            {' '}
            বাংলাদেশের একটি
            শীর্ষস্থানীয় সফটওয়্যার এবং আইটি সেবা প্রদানকারী কোম্পানি। ২০২০ সাল থেকে
            {' '}
            <span className="text-[#7004bc]">খিদমা আইটি</span>
            {' '}
            সফলভাবে
            প্রচুর প্রকল্প সম্পন্ন করেছে। আমরা বিশেষভাবে শিক্ষা ব্যবস্থাপনা,
            অ্যাকাউন্ট ম্যানেজমেন্ট, ফার্মেসি ম্যানেজমেন্ট, ইনভেন্টরি
            ম্যানেজমেন্ট ইত্যাদির মতো ম্যানেজমেন্ট সফটওয়্যারের জন্য কাজ করি।
            আমরা সর্বোচ্চ ভালো মানের সেবা প্রদান করি যাতে সফ্টওয়্যার, ওয়েবসাইট, পরামর্শ, প্রশিক্ষণ এবং বাস্তবায়ন ও সকল প্রকার সহযোগীতা অন্তর্ভুক্ত থাকে। আধুনিক প্রযুক্তির যুগে সর্বোচ্চ নিরাপত্তা ও
            বৈশ্বিক মান বজায় রেখে সফটওয়্যার এবং ওয়েবসাইট তৈরি করা এবং সাইবার সিকিউরিটি প্রদান করা এই কোম্পানির
            প্রধান কাজ। গ্রাহকদের সন্তুষ্টিই আমাদের মূল লক্ষ্য। তাই আমরা ঝামেলামুক্ত ও সহজে বোধগম্য সিস্টেম প্রদান করি। আমরা সর্বোত্তম মূল্যের
            সাথে সর্বোত্তম গুণমান নিশ্চিত করি।
          </p>
          {/* <div className="">
            <button
              data-aos="zoom-out-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              type="button"
              className="bg-yellow-400 py-3 px-8 rounded-full hover:bg-primary hover:text-white"
            >
              Learn More
            </button>
          </div> */}
        </div>
        <div
          className=""
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            className="object-cover object-center w-[100vw]"
            alt="hero"
            src={vector2}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
