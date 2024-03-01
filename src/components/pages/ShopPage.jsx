import React from 'react';
import ShopFilter from '../shop/ShopFilter';
import Items from '../items/Items';
import PaginationItems from '../items/PaginationItems';
import { jewelry } from '../../jewelry.data';

const ShopPage = ({setCartItems, cartItems, onPlus}) => {
    return (
        <>
            <ShopFilter/>
            <Items key={jewelry.id} jewelry={jewelry} setCartItems={setCartItems} cartItems={cartItems} onPlus={onPlus} />
            <PaginationItems/>
        </>
    );
};

export default ShopPage;