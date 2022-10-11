import React from 'react';
import product1 from '../../assets/service/Picture-eduman-1024x575.png';
import product2 from '../../assets/service/picture-Online-Addmi-1024x575.png';
import product3 from '../../assets/service/Website1-1024x576.png';
import product4 from '../../assets/service/picture-Attendance-1024x575.png';
import ProductCard from './ProductCard';

function Products() {
  const admissionFormList = [
    'সহজ ও দ্রুত ভর্তি/জয়েন করা',
    'প্রয়োজনীয় সকল অপশনে তথ্য অটো সেট হওয়া',
    'ভর্তি তালিকা থেকে সহজে তথ্য বের করা',
    'ভর্তি ম্যাসেজ পাঠানো',
    'প্রিন্ট করা',
    'অটোম্যাটিক সংক্ষিপ্ত রিপোর্ট তৈরি হওয়া',
  ];
  const haziraList = [
    'ফিঙ্গারপ্রিন্ট, কার্ড , বায়োমেট্রিক বা মোবাইলের মাধ্যমে হাজিরা নেয়া',
    'হাজিরা দেয়ার সাথে সাথে রিয়েল টাইম (লাইভ ) রিপোর্ট দেখার সুবিধা',
    'মোট  উপস্থিত সংখ্যা, শতকরা, অনুপস্থিত সংখ্যা, শতকরা , জরিমানা টাকা রিপোর্ট',
    'হাজিরা মেসেজ পাঠানো',
    'দৈনিক , মাসিক, বাৎসরিক রিপোর্ট ',
  ];
  const resultList = [
    'সহজ ও দ্রুততম পদ্ধতিতে রেজাল্ট তৈরী করা',
    'রেজাল্ট অটো ক্যালকুলেশন করা',
    'রেজাল্ট রেঙ্কিং করা',
    'রেজাল্ট অটো রিপোর্ট তৈরী হওয়া ',
    'অনলাইনে রেজাল্ট অটো পাবলিশ হওয়া ',
    'রেজাল্ট তথ্য ফিল্টার করা',
  ];
  // সুবিধা
  const salaryList = [
    'অনেক সহজে দ্রুত বেতন জমা করা ',
    'শিক্ষার্থীর রোল/আইডি/মোবাইল নম্বর দিয়ে তথ্য বের করা। সেই সাথে অটো রিপোর্ট চলে  আসা  ',
  ];

  return (
    <section className="w-full font-Poppins font-kalpurush">
      <div className="container font-[Poppins]  mx-auto py-24 xl:max-w-6xl">
        <div className=" text-center">
          <h1
            className="h1 text-[#3b224e] font-bold font-kalpurush"
            data-aos="zoom-in-up"
          >
            আমাদের পণ্য-সেবা
          </h1>
          <p
            className="uppercase text-pink text-lg mb-20 font-kalpurush"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            ব্যক্তিগত ও প্রাতিষ্ঠানিক কাজের বোঝা কমুক, বেড়ে যাক সাচ্ছন্দ্যময়
            জীবনের গতি
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center sm:gap-x-4 lg:gap-x-2 gap-y-8">
          <ProductCard
            img={product1}
            name="ভর্তি ফরম"
            heading="(শিক্ষার্থী, শিক্ষক, কর্মচারী)"
            list={admissionFormList}
            aos="zoom-in-right"
          />
          <ProductCard
            img={product2}
            name="বেতন সিস্টেম"
						// heading="(শিক্ষার্থী, শিক্ষক, কর্মচারী)"
            list={salaryList}
            aos="zoom-in-right"
          />
          <ProductCard
            img={product3}
            name="রেজাল্ট"
						// heading=""
            list={resultList}
            aos="zoom-in-right"
          />
          <ProductCard
            img={product4}
            name="হাজিরা"
						// heading="(শিক্ষার্থী, শিক্ষক, কর্মচারী)"
            list={haziraList}
            aos="zoom-in-left"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
