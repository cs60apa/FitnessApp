import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import News from './Components/News';
import Subscriptions from './Components/Subscriptions';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
      </Routes>
      </BrowserRouter>
      <Navbar />
      <Hero />
      <Analytics />
      <News />
      <Subscriptions />
      <Footer />
    </div>
  ) 
}

export default App;
