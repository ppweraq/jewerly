import React from 'react';
import './shopFilter.css'

const ShopFilter = () => {
    return (
        <div className='shop__container'>
            <div className="shops">
                <div className='shop__title'>Products</div>
                <div className="shop__nav">
                    <ul className="shop__list">
                        <li className="shop__item"><a href="!#" className="shop__link">Серьги</a></li>
                    </ul>
                    <ul className="shop__list">
                        <li className="shop__item shop-ring"><a href="!#" className="shop__link shop-ring">Кольца</a></li>
                    </ul>
                    <ul className="shop__list">
                        <li className="shop__item"><a href="!#" className="shop__link">Браслет</a></li>
                    </ul>
                    <ul className="shop__list">
                        <li className="shop__item"><a href="!#" className="shop__link">Ожерелья</a></li>
                    </ul>
                    <ul className="shop__list">
                        <li className="shop__item"><a href="!#" className="shop__link">Часы</a></li>
                    </ul>
                    <ul className="shop__list ">
                        <li className="shop__item"><a href="!#" className="shop__link">Мужское</a></li>
                    </ul>
                </div>
                
                <div className="shop__filters">
                    <ul className="shop__filter-list">
                        <li className="filter__item filter__item-first">Цена<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>
                        
                    </ul>
                    <ul className="shop__filter-list">
                        <li className="filter__item">Материал<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>
                        
                    </ul>
                    <ul className="shop__filter-list">
                        <li className="filter__item">Бренд<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>                        
                       
                    </ul>
                    <ul className="shop__filter-list">
                        <li className="filter__item">Размер<button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m14 5l-6.5 7L1 5"/></svg></button></li>                        
                        
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default ShopFilter;