import React from 'react';
import './items.css'
import Item from './Item';


const Items = ({jewelry, onPlus, setCartItems, cartItems, handleClick, handleFavoriteClick, isFavorite, addedCart}) => {

    // const onCartToAdd = (obj) => {
    //     const isItemInCart = cartItems.some(item => item.item.id === obj.item.id)
    //     if(!isItemInCart) setCartItems(prev => [...prev, obj])
        
    // }



    return (
        <div className='container__items'>
           {
            jewelry.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onPlus={onPlus}
                    // onFavorite={()=>console.log('лайкнули')}
                    isFavorite={isFavorite} addedCart={addedCart}
                />
            ))
           }
        </div>
    );
};

export default Items;