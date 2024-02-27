import React, { useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { jewelry } from "../../jewelry.data";
import Item from "../items/Item";

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = jewelry.find((item) => item.id === productId);
  const [activeTab, setActiveTab] = useState("about");

  console.log(product);

  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const similarProducts = jewelry.filter(item => item.category === product.category && item.id !== product.id);

  return (
    <div className="product-container" key={product.id}>
      <div className="product__card-top">
        <div className="product-image">
          <img src={`./img/${product.image}.png`} alt="" />
        </div>
        <div className="product-description">
          <div className="product-title">
            <li className="product__collection-name">КОЛЛЕКЦИЯ RIVER LUXE</li>
            <li className="product-name">{product.name}</li>
            <li className="product-price">${product.price}</li>
            <li className="product-sub-description">
              <p>
                Материал - Белое золото 585 пробы <br />
                Примерный вес - 3.24 г <br />
                Вставка - Бриллиант (природный) (34 шт, 0.129 карат) и еще 4{" "}
              </p>
              <p className="product__desc-newline">
                Реальные характеристики изделия могут иметь незначительные
                отличия от представленных на сайте
              </p>
            </li>
            <div className="product-rating">
              <div className="product__data-rating">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m7.325 19.923l1.24-5.313l-4.123-3.572l5.431-.47L12 5.557l2.127 5.01l5.43.47l-4.122 3.572l1.24 5.313L12 17.102z"
                    />
                  </svg>
                </li>
                <div className="product__review">(64 отзыва)</div>
              </div>
              <div className="product__like">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M178 36c-21.44 0-39.92 10.19-50 27.07C117.92 46.19 99.44 36 78 36a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a333.81 333.81 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a333.81 333.81 0 0 0 52.7-36.73C218 152.47 236 122.59 236 94a58.07 58.07 0 0 0-58-58m-50 175.42C114 203.46 28 152.07 28 94a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 55.31 156.89 44 178 44a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42"
                    />
                  </svg>
                </button>
              </div>
              <div className="product__share">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.002 21.5q-1.04 0-1.771-.73q-.731-.728-.731-1.77q0-.2.035-.413q.034-.214.103-.402l-7.742-4.562q-.367.414-.854.645Q6.556 14.5 6 14.5q-1.042 0-1.77-.728q-.73-.729-.73-1.77q0-1.04.73-1.771Q4.957 9.5 6 9.5q.556 0 1.042.232q.487.231.854.645l7.742-4.562q-.069-.188-.103-.402Q15.5 5.2 15.5 5q0-1.042.729-1.77q.728-.73 1.769-.73q1.04 0 1.771.729q.731.728.731 1.769q0 1.04-.73 1.771q-.728.731-1.77.731q-.556 0-1.042-.232q-.487-.231-.854-.645l-7.742 4.562q.069.188.103.4q.035.213.035.411q0 .198-.035.415q-.034.216-.103.404l7.742 4.562q.367-.414.854-.645q.486-.232 1.042-.232q1.042 0 1.77.729q.73.728.73 1.769q0 1.04-.728 1.771q-.729.731-1.77.731M18 6.5q.617 0 1.059-.441Q19.5 5.617 19.5 5t-.441-1.059Q18.617 3.5 18 3.5t-1.059.441Q16.5 4.383 16.5 5t.441 1.059Q17.383 6.5 18 6.5m-12 7q.617 0 1.059-.441Q7.5 12.617 7.5 12t-.441-1.059Q6.617 10.5 6 10.5t-1.059.441Q4.5 11.383 4.5 12t.441 1.059Q5.383 13.5 6 13.5m12 7q.617 0 1.059-.441q.441-.442.441-1.059t-.441-1.059Q18.617 17.5 18 17.5t-1.059.441Q16.5 18.383 16.5 19t.441 1.059q.442.441 1.059.441m0-1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="product-quantity">
            <span>Количество</span>
            <div className="product__count">
              <button onClick={minusQuantity}>-</button>
              <li>{quantity}</li>
              <button onClick={plusQuantity}>+</button>
            </div>
          </div>
          <div className="product-cart">
            <button>В КОРЗИНУ</button>
          </div>

          <div className="product-detail">
            <div className="detail-number">
              <li className="product-desc__detail">Продукт-номер:</li>
              <span>9248-1753-6392</span>
            </div>
            <div className="detail-number">
              <li className="product-desc__detail">Категория:</li>
              <span>Кольца</span>
            </div>
            <div className="detail-number">
              <li className="product-desc__detail">Металл:</li>
              <span>Белое золото</span>
            </div>
            <div className="detail-number">
              <li className="product-desc__detail">Доставка:</li>
              <span className="detail_delivery">До дома</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product__card-descr">
        <div className="descr-nav">
          {product.tabs.map((tab) => (
            <a
              key={tab.tab}
              className={activeTab === tab.tab ? "active" : ""}
              href="#!"
              onClick={() => setActiveTab(tab.tab)}
            >
              {tab.title}
            </a>
          ))}
        </div>
        <div className="descr-text">
          <p>
            {product.tabs.find((tab) => tab.tab === activeTab)?.description}
          </p>
        </div>
      </div>
        <div className="product__similar">
        <li>ПОХОЖИЕ ТОВАРЫ</li>
        <div className="product-similar-item">

          {similarProducts.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Product;
