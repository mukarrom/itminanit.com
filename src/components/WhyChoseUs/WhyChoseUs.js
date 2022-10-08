import React from 'react';

function WhyChoseUs() {
  const arr = [
    'ডিজিটাল ভর্তি ফরম',
    'বেতনের হিসাব',
    'নোটিশ সিস্টেম',
    'রেজাল্ট সিস্টেম',
    'ডিজিটাল হাজিরা',
    'হিসাব ম্যানেজমেন্ট',
    'ইউজার সিস্টেম',
    'ড্যাশাবোর্ড',
  ];
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1
            className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 font-anek"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            কেন আমাদের সফটওয়্যার ব্যবহার করবেন?
          </h1>
          <p
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            আপনাদের কাজকে আরো সহজ করতে  আমাদের সফটওয়্যারে রয়েছে আকর্ষনীয় সব ফিচারস
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {arr.map((item, index) => (
            <div
              key={index}
              className="p-2 sm:w-1/2 w-full"
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium font-tiro">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="600"
        >
          Button
        </button>
      </div>
    </section>
  );
}

export default WhyChoseUs;
