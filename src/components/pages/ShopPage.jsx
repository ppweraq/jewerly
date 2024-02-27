import React from 'react';
import ShopFilter from '../shop/ShopFilter';
import Items from '../items/Items';
import PaginationItems from '../items/PaginationItems';
import { jewelry } from '../../jewelry.data';

const ShopPage = () => {
    return (
        <>
            <ShopFilter/>
            <Items key={jewelry.id} jewelry={jewelry}/>
            <PaginationItems/>
        </>
    );
};

export default ShopPage;