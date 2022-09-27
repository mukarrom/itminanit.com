import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Products from '../components/Services/Products';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

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
      <section id="products">
        <Products />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
