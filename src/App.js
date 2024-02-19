import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SliderRings from './components/slider/SliderRings';
import Collection from './components/collection/Collection';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Main/>
        <SliderRings/>
        <Collection/>
      </div>
    </div>
  );
}

export default App;
