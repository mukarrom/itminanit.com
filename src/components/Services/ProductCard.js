import React from 'react';

function ProductCard({ img, name, heading }) {
  return (
    <div className="card  font-tiro bg-[#f7f7f7] shadow-xl mx-[10vw] sm:mx-0">
      <div className="img bg-[#dcddf9]">
        <img src={img} alt="" />
      </div>
      <div className="px-4 py-8 flex flex-col justify-center items-center">
        <h2 className="h2 text-center">{name}</h2>
        <p className="text-justify my-6 text-lg">{heading}</p>
      </div>
      <button type="button" className="btn-secondary py-2 px-4 rounded-full absolute bottom-0 m-4 w-full">
        আরো জানতে
      </button>
    </div>
  );
}

export default ProductCard;
