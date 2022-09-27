import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  return (
    <div>
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
