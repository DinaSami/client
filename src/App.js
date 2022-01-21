import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Forth from './components/Forth/Forth';
import Fifth from './components/Fifth/Fifth';
import Footer from './components/Footer/Footer';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div>
      <Hero/>
      <Second/>
      <Third/>
      <Forth/>
      <Fifth/>
      <Footer/>
    </div>
  )
}

export default App
