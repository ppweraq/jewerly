import React from "react";
import "./cart.css";

const Cart = ({onClose, onRemove, items}) => {
    const handleContainerClick = (e) => {
        e.stopPropagation()
    }
  return (
    <div className="cart-back-shadow" onClick={onClose}>
      <div className="cart-container"  onClick={handleContainerClick}>
        <li className="cart-nav">Корзина</li>
        <div className="cart-items">
          
            {
                items.map((item) => (
                    <div className="cart__item" key={item.item.id}>
                        <img className="cart-img" src={`/img/${item.item.image}.png`} alt="ring" />
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
                        <button onClick={()=>onRemove(item.item.id)}>
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
            <b>21 498 руб.</b>
          </li>
          <li className="total-price">
            <span>Налог 5%:</span>
            <div className="dashed"></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <div className="cart-buy-btn">
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
