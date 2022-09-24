import React from 'react';
import vector2 from '../assets/vector/vector-art-2.png';

function About() {
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="">
          <p className="">We are magaone company</p>
          <h1 className="h1">We are making design better for everyone</h1>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolore reiciendis obcaecati. Mollitia eaque, doloremque quos in quasi quis, quas, molestias assumenda placeat temporibus ad accusamus! Quo tempora qui amet!</p>
          <div className="">
            <button type="button" className="bg-yellow py-3 px-8 rounded-full hover:bg-primary hover:text-white">Learn More</button>
          </div>
        </div>
        <div className="">
          <img className="object-cover object-center w-[115vw]" alt="hero" src={vector2} />
        </div>
      </div>
    </section>
  );
}

export default About;
