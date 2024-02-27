import React, { useState } from 'react';
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
import Cart from './components/cart/Cart';

function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])


  const onRemoveItem = (id)  => {
    setCartItems((prev) => prev.filter(item => item.item.id !== id))
      // console.log(id);
  }

  // console.log(cartOpened);
  return (
    <div className="App">
      <div className='container'>
        {cartOpened && <Cart onClose={()=>setCartOpened(false)} items={cartItems} onRemove={onRemoveItem}/>}
        
      
        
        <Routes>
          <Route path='/' element={<Header onClickCart={()=>setCartOpened(true)} />}> 
            <Route index element={<HomePage />}/>
            <Route path='shop' element={<ShopPage setCartItems={setCartItems} cartItems={cartItems}/>}/>
      
          
          </Route>
          <Route path='shop/product/:id' element={<Product key={jewelry.id} jewelry={jewelry}/>}/>


        </Routes>
      </div>
    </div>
  ); 
}

export default App;
