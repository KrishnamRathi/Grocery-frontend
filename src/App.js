import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Hygene from './Hygene'
import Categories from './Categories';
import Delivery from './Delivery';
import Features from './Features';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <div className="home__page">
        <Header/>
        <Home/>
      </div>
      <div>
        <Hygene/>
      </div>
      <div>
        <Categories/>
      </div>
      <div>
        <Delivery/>
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
