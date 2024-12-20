import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Products from './pages/Products';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;


