import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/About/About';
import Services from '../components/Services/Services';

function Home() {
  return (
    <div>
      <header className="" id="home">
        <Banner />
      </header>
      <section className="w-10/12 mx-auto" id="about">
        <About />
      </section>
      <section id="service">
        <Services />
      </section>
    </div>
  );
}

export default Home;
