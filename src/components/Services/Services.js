import React from 'react';
import service1 from '../../assets/service/service-img-1.png';
import service2 from '../../assets/service/service-img-2.png';
import service3 from '../../assets/service/service-img-3.png';
import service4 from '../../assets/service/service-img-4.png';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section className="bg-service-pattern">
      <div className="font-[Poppins]  mx-auto py-24 xl:max-w-6xl">
        <p
          className="uppercase text-center text-pink text-lg"
          data-aos="zoom-in"
        >
          Services We're Provided
        </p>
        <h1
          className="h1 text-center text-[#3b224e] font-bold mb-20"
          data-aos="zoom-in-up"
        >
          Our Services
        </h1>
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 font-kalpurush">
          <ServiceCard
            bg="#d6edff"
            category="software"
            heading="প্রতিষ্ঠান এবং  ইন্ভেন্টরি ম্যানেজমেন্ট সফটওয়্যার"
            img={service3}
            dataAos="flip-right"
          />
          <ServiceCard
            bg="#e9ddff"
            category="web"
            heading="ওয়েবসাইট ডিজাইন এবং ডেভলাপম্যান্ট"
            img={service1}
            dataAos="flip-right"
          />
          <ServiceCard
            bg="#ffede1"
            category="mobile app"
            heading="এন্ড্রয়েড এবং আইওএস মোবাইল সফটওয়্যার"
            img={service4}
            dataAos="flip-left"
          />
          <ServiceCard
            bg="#ffdadb"
            category="security"
            heading="সাইবার সিকিউরিটি"
            img={service2}
            dataAos="flip-left"
          />
        </div>
        <div
          className="flex flex-wrap justify-center space-y-6 md:space-y-0 mt-24"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-3xl">
            <span>Let's Start A</span>
            {' '}
            <span className="font-bold">New Project Together</span>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-secondary rounded-full px-8 ml-8"
            >
              Request a Quote &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
