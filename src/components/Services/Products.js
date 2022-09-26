import React from 'react';
import product1 from '../../assets/service/Picture-eduman-1024x575.png';
import product2 from '../../assets/service/picture-Online-Addmi-1024x575.png';
import product3 from '../../assets/service/Website1-1024x576.png';

function Products() {
  return (
    <section className="w-full font-Poppins">
      <div className="container font-[Poppins]  mx-auto py-24 xl:max-w-6xl">
        <div className=" text-center">
          <h1 className="h1 text-[#3b224e] font-bold font-anek" data-aos="zoom-in-up">
            আমাদের পণ্য-সেবা
          </h1>
          <p className="uppercase text-pink text-lg mb-20" data-aos="zoom-in font-tiro">
            ব্যক্তিগত ও প্রাতিষ্ঠানিক কাজের বোঝা কমুক, বেড়ে যাক সাচ্ছন্দ্যময়
            জীবনের গতি
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="card w-1/4  font-tiro">
            <div className="img">
              <img src={product1} alt="" />
            </div>
            <h2 className="h2">Eduman</h2>
            <p className="p">
              এডুম্যান সফটওয়্যারে আস্থা রেখেছে ৫০০০+ স্কুল-কলেজ, ৫০০০০ শিক্ষক,
              ২০ লক্ষ+ শিক্ষার্থী ও অভিভাবকগণ।
            </p>
            <button
              type="button"
              className="btn-secondary py-2 px-4 rounded-full"
            >
              আরো জানতে
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
