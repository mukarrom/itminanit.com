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
        <p className="uppercase text-center text-pink text-lg">
          Services We're Provided
        </p>
        <h1 className="h1 text-center text-[#3b224e] font-bold mb-20">
          Our Digital Marketing Services
        </h1>
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
          <ServiceCard
            bg="#e9ddff"
            category="ppc"
            heading="Digital Media & PPC Advertising"
            img={service1}
          />
          <ServiceCard
            bg="#ffdadb"
            category="MARKETING"
            heading="Content Marketing Service"
            img={service2}
          />
          <ServiceCard
            bg="#d6edff"
            category="SEO"
            heading="Search Engine Optimization"
            img={service3}
          />
          <ServiceCard
            bg="#ffede1"
            category="ppc"
            heading="Website Design & Development"
            img={service4}
          />
        </div>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 mt-24">
          <div className="text-3xl">
            <span>Let's Start A</span>
            {' '}
            <span className="font-bold">New Project Together</span>
          </div>
          <div className="button">
            <button type="button" className="btn btn-secondary rounded-full px-8 ml-8">Request a Quote &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
