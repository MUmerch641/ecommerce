// src/App.jsx
import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './Components/Header';
import Explore from './pages/Explore/Explore';
import Feature from './pages/Features/Feature';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Explore/>
      <Feature/>
      <Footer/>
    </div>
  );
};

export default App;
