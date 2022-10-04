import React from 'react';

function ServiceCard({
  bg, category, heading, img, dataAos,
}) {
  return (
    <div
      className=" p-10 flex flex-row justify-between items-center shadow-xl rounded-lg mx-4 lg:mx-0"
      style={{ background: bg }}
      data-aos={dataAos}
			// data-aos-offset="200"
			// data-aos-easing="ease-in-sine"
			// data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="letter">
        <h5 className="text-lg text-[#918BAE]">{category}</h5>
        <h4 className="font-bold h4 mt-9 mb-11">{heading}</h4>
        <a href=" " className="hover:text-[#ff1f8e]">
          Learn More &gt;
        </a>
      </div>
      <div className="img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default ServiceCard;
