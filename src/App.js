
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
