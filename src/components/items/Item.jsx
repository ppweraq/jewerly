import React, { useState } from "react";
import "./items.css";
import { Link } from "react-router-dom";

const Item = ({ item, onPlus, onFavorite }) => {
  const [addedCart, setAddedCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    onPlus({ item });
    setAddedCart(!addedCart);
  };
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    };
  return (
    <div>
      <div className="item" key={item.id}>
        <div className="item__img">
          <img src={`/img/${item.image}.png`} alt="product" />
          <div className="item__img-btn">
            <div className="right_buttons">
              <div className="like_btn" onClick={onFavorite}>
                <button onClick={handleFavoriteClick}>
                  {isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                      />
                    </svg>
                  ) : (
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
                  )}
                </button>
              </div>
              <div className="share_btn">
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
            <div className="add-cart-btn">
              {
                onPlus && (

              <button onClick={handleClick}>
                {addedCart ? "+" : "ADD TO CART"}
              </button>
                )
              }

            </div>
          </div>
        </div>

        <div className="item__title">
          <div className="item__name">
            <Link to={`product/${item.id}`}>{item.name}</Link>
          </div>
          <div className="item__price">{`$${item.price}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
