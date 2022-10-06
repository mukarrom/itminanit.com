import React from 'react';

function ProductCard({
  img, name, heading, aos,
}) {
  return (
    <div
      className="card font-tiro rounded-md bg-[#f7f7f7] shadow-xl mx-[10vw] sm:mx-0 pb-12"
      data-aos={aos}
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <div className="bg-[#dcddf9]">
        <img
          src={img}
          alt=""
          className="w-full h-[60vw] sm:h-[30vw] lg:h-[25vw] xl:h-[15rem]"
        />
      </div>
      <div className="px-6 py-8 flex flex-col justify-center items-center bg-[#f7f7d9]">
        <h2 className="h3 text-center text-[#55595c]">{name}</h2>
        <p className="text-center my-4 text-lg text-[rgb(85,89,92)]">
          {heading}
        </p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center mb-8">
        <button
          type="button"
          className="btn btn-secondary py-2 px-8 rounded-full"
        >
          আরো জানতে
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
