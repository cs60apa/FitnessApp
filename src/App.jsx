import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import News from './Components/News';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <News />
      <Cards />
      <Footer />
    </div>
  ) 
}

export default App;
