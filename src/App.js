import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SliderRings from './components/slider/SliderRings';
import Collection from './components/collection/Collection';
import Items from './components/items/Items';
import { jewelry } from './jewelry.data'
import PaginationItems from './components/items/PaginationItems';
import ShopFilter from './components/shop/ShopFilter';
import Product from './components/Product/Product';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';

function App() {



  return (
    <div className="App">
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Header/>}> 
            <Route index element={<HomePage/>}/>
            <Route path='shop' element={<ShopPage/>}/>
          
          
          </Route>
          <Route path='shop/product/:id' element={<Product key={jewelry.id} jewelry={jewelry}/>}/>


        </Routes>
      </div>
    </div>
  ); 
}

export default App;
