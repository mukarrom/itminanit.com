import React from 'react';
import Banner from '../components/Home/Banner';
import About from './About';

function Home() {
  return (
    <div>
      <header className="">
        <Banner />
      </header>
      <section className="w-10/12 mx-auto">
        <About />
      </section>
    </div>
  );
}

export default Home;
