import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { jewelry } from "./jewelry.data";
import Product from "./components/Product/Product";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import Cart from "./components/cart/Cart";
import InputDataUser from "./components/cart/InputDataUser";
import ThankYou from "./components/cart/ThankYou";
import CompleteOrder from "./components/cart/CompleteOrder";
import AppContext from "./context";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [completeOpened, setCompleteOpened] = useState(false);

  const onCartToAdd = (obj) => {
    const isItemInCart = cartItems.some((item) => item.item.id === obj.item.id);
    if (!isItemInCart) setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.item.id !== id));
    // console.log(id);
  };

  useEffect(() => {
    if (cartOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [cartOpened]);

  // console.log(cartOpened);
  return (
    <AppContext.Provider value={{ cartItems, cartOpened }}>
      <div className="App">
        <div className="container">
          {cartOpened && (
            <Cart
              onClose={() => setCartOpened(false)}
              items={cartItems}
              onRemove={onRemoveItem}
            />
          )}
          {completeOpened && (
            <CompleteOrder onCloseComplete={() => setCompleteOpened(false)} />
          )}

          <Routes>
            <Route
              path="/"
              element={<Header onClickCart={() => setCartOpened(true)} />}
            >
              <Route index element={<HomePage />} />
              <Route
                path="shop"
                element={
                  <ShopPage
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    onPlus={(obj) => onCartToAdd(obj)}
                  />
                }
              />

              <Route
                path="shop/product/:id"
                element={
                  <Product
                    key={jewelry.id}
                    jewelry={jewelry}
                    item={cartItems}
                    onPlus={(obj) => onCartToAdd(obj)}
                  />
                }
              />
              <Route
                path="order"
                element={
                  <InputDataUser onOpenPage={() => setCompleteOpened(true)} />
                }
              />
              <Route path="thank-you" element={<ThankYou />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
