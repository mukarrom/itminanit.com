import React from 'react';

function ServiceCard({
  bg, category, heading, img,
}) {
  return (
    <div
      className={`bg-[#e9ddff] bg-${bg} p-10 flex flex-row justify-between items-center shadow-xl rounded-lg mx-4 lg:mx-0`}
    >
      <div className="letter">
        <h5 className="text-lg text-[#918BAE]">{category}</h5>
        <h4 className="font-bold h4 mt-9 mb-11">{heading}</h4>
        <a
          href=" "
          className="hover:text-[#ff1f8e]"
        >
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
