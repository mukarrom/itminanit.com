import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  const [hide, setHide] = useState('hidden');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHide('block');
    } else {
      setHide('hidden');
    }
  });
  return (
    <div>
      <div className={`sticky top-0 z-50 ${hide} gradient-bg2`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
