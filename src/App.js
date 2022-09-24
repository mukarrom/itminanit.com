import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import Home from './pages/Home';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './components/Navbar/Navbar';

function App() {
  const [hide, setHide] = useState('');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHide('block');
    } else {
      setHide('hidden');
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className={`sticky top-0 z-50 ${hide}`}
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="bg-purple text-white p-32"
      >
        Hello everyone how are you
      </div>
    </div>
  );
}

export default App;
