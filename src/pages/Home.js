import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Products from '../components/Services/Products';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import WhyChoseUs from '../components/WhyChoseUs/WhyChoseUs';
// import TodoList from '../components/Test/TodoList';

function Home() {
  return (
    <div>
      <header className="" id="home">
        <Banner />
      </header>
      {/* <section>
        <TodoList />
      </section> */}
      <section className="w-10/12 mx-auto" id="about">
        <About />
      </section>
      <section id="why-chose-us">
        <WhyChoseUs />
      </section>
      <section id="services">
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
