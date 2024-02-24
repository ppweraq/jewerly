import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SliderRings from './components/slider/SliderRings';
import Collection from './components/collection/Collection';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        {/* <Main/>
        <SliderRings/>
        <Collection/> */}
        <Products/>
      </div>
    </div>
  );
}

export default App;
