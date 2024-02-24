import React from 'react';
import './products.css'

const Products = () => {
    return (
        <div className='prod__container'>
            <div className="products">
                <div className='product__title'>Products</div>
                <div className="product__nav">
                    <ul className="product__list">
                        <li className="product__item"><a href="!#" className="product__link">Серьги</a></li>
                    </ul>
                    <ul className="product__list">
                        <li className="product__item prod-ring"><a href="!#" className="product__link prod-ring">Кольца</a></li>
                    </ul>
                    <ul className="product__list">
                        <li className="product__item"><a href="!#" className="product__link">Браслет</a></li>
                    </ul>
                    <ul className="product__list">
                        <li className="product__item"><a href="!#" className="product__link">Ожерелья</a></li>
                    </ul>
                    <ul className="product__list">
                        <li className="product__item"><a href="!#" className="product__link">Часы</a></li>
                    </ul>
                    <ul className="product__list ">
                        <li className="product__item"><a href="!#" className="product__link">Мужское</a></li>
                    </ul>
                </div>
                
                <div className="product__filters">
                    <ul className="product__filter-list">
                        <li className="filter__item filter__item-first">Цена<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>
                        
                    </ul>
                    <ul className="product__filter-list">
                        <li className="filter__item">Материал<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>
                        
                    </ul>
                    <ul className="product__filter-list">
                        <li className="filter__item">Бренд<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>                        
                       
                    </ul>
                    <ul className="product__filter-list">
                        <li className="filter__item">Размер<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>                        
                        
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Products;