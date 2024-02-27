import React from 'react';
import './items.css'
import Item from './Item';


const Items = ({jewelry}) => {


    return (
        <div className='container__items'>
           {
            jewelry.map(item => (
                <Item
                    key={item.id}
                    item={item}
                />
            ))
           }
        </div>
    );
};

export default Items;