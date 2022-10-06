import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import vector2 from '../../assets/vector/vector-art-2.png';

const TEXTS = ['designs', 'ideas', 'works'];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      // eslint-disable-next-line no-shadow
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  // console.log(index % TEXTS.length);
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className=""
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p
            className=""
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            We are magaone company
          </p>
          <h1
            className="h1"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            {/* text cange animation library: https://www.npmjs.com/package/react-text-transition */}
            We are making
            {' '}
            <TextTransition inline springConfig={{ mass: 1, tension: 170, friction: 26 }}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            {' '}
            better for everyone
          </h1>
          <p
            className="my-10"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolore
            reiciendis obcaecati. Mollitia eaque, doloremque quos in quasi quis,
            quas, molestias assumenda placeat temporibus ad accusamus! Quo
            tempora qui amet!
          </p>
          <div className="">
            <button
              data-aos="zoom-out-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              type="button"
              className="bg-yellow-400 py-3 px-8 rounded-full hover:bg-primary hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className=""
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            className="object-cover object-center w-[115vw]"
            alt="hero"
            src={vector2}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
