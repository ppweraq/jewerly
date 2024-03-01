import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ onClose, onRemove, items }) => {
  const totalPrice = items.reduce((sum, obj) => {
    const price = parseFloat(obj.item.price);
    console.log(price);
    return price + sum;
  }, 0);
  const taxPrice = parseFloat(totalPrice * 0.05);
  // console.log(taxPrice.toFixed(2));

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="cart-back-shadow" onClick={onClose}>
      <div className="cart-container" onClick={handleContainerClick}>
        <div className="cart-nav">
          <li className="cart-nav-text">Корзина</li>
          <li className="cart__close">
            <button className="cart_close-btn" onClick={onClose}>
              <img src="/img/close_nav.png" alt="close" />
            </button>
          </li>
        </div>
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart__item" key={item.item.id}>
              <img
                className="cart-img"
                src={`/img/${item.item.image}.png`}
                alt="ring"
              />
              <div className="cart__item-descr">
                <li className="cart__collection-name">КОЛЬЦО</li>
                <li className="cart-name">{item.item.name}</li>
                <li className="cart-price">${item.item.price}</li>
                {/* <div className="cart-details"> */}
                <div className="cart_detail">
                  <li className="cart-desc__detail">Продукт-номер:</li>
                  <span>9248-1753-6392</span>
                </div>
                <div className="cart_detail">
                  <li className="cart-desc__detail">Категория:</li>
                  <span>Кольца</span>
                </div>
                <div className="cart_detail">
                  <li className="cart-desc__detail">Металл:</li>
                  <span>Белое золото</span>
                </div>
                <div className="cart_detail">
                  <li className="cart-desc__detail">Доставка:</li>
                  <span>До дома</span>
                </div>
                {/* </div> */}
              </div>
              <div className="cart__item-remove-btn">
                <button onClick={() => onRemove(item.item.id)}>
                  <img src="/img/remove.png" alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="line_cart"></div>
        <ul className="cart__total">
          <li className="total-price">
            <span>Итого</span>
            <div className="dashed"></div>
            <b>{totalPrice} $</b>
          </li>
          <li className="total-price">
            <span>Налог 5%:</span>
            <div className="dashed"></div>
            <b>{taxPrice.toFixed(2)} $</b>
          </li>
        </ul>
        <div className="cart-buy-btn">
          <Link className="cart-buy-btn" to="order" onClick={onClose}>
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
