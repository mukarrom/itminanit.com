import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import Home from './pages/Home';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './components/Navigation/Navbar';
// import Test from './test/Test';

function App() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', scrollEvent);
  }, []);
  AOS.init();
  return (
    <div>
      <div
        className={
					scrolling
					  ? 'block fixed top-0 w-full gradient-bg2 transition-nav z-50'
					  : 'hidden'
				}
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="bg-purple text-white p-32 text-center"
      >
        Enimation Test
      </div> */}
    </div>
  );
}

export default App;
