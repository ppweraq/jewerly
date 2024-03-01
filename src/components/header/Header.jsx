import React, { useState } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <header>
        <div className="header__main-logo">
          <Link to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="head-left">
          <div className="header__nav">
            <a href="#!">Rings</a>
            <a href="#!">Blog</a>
            <Link to="shop">Shop</Link>
            <a href="#!">About us</a>
          </div>
          <button
            className={`nav__menu ${isNavOpen ? "nav-open" : ""}`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isNavOpen && (
            <div className="header__nav header__nav-open">
              <li className="nav__close">
                <button className="nav_close-btn" onClick={closeNav}>
                  <img src="/img/close_nav.png" alt="close" />
                </button>
              </li>
              <a href="#!">Rings</a>
              <a href="#!">Blog</a>
              <Link to="shop">Shop</Link>
              <a href="#!">About us</a>
            </div>
          )}

          <div className="header__left-logo">
            <ul>
              <svg
                className="left-logo__loupe"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </ul>
            <ul>
              <svg
                className="left_logo__heart"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36"
                />
              </svg>
            </ul>
            <ul>
              <svg
                className="left-logo__cart"
                onClick={props.onClickCart}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M100 216a20 20 0 1 1-20-20a20 20 0 0 1 20 20m84-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m51.47-120.47l-27.29 88.7A27.87 27.87 0 0 1 181.41 184H82.93A28.13 28.13 0 0 1 56 163.69L21.81 44H12a12 12 0 0 1 0-24h12.82a20.08 20.08 0 0 1 19.23 14.51L51.34 60H224a12 12 0 0 1 11.47 15.53M207.75 84H58.19l20.89 73.1a4 4 0 0 0 3.85 2.9h98.48a4 4 0 0 0 3.83-2.82Z"
                />
              </svg>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
