import React from 'react';
import { Link } from 'react-router-dom';

const CompleteOrder = ({onCloseComplete}) => {
    return (
        <div className="complete-shadow">

            <div className='complete-container'>
                <div className='complete-text'>Заказ оформлен</div>
                <div className="complete-back-btn">
                    <Link onClick={onCloseComplete} to='/shop'>Вернуться к покупкам</Link>
                </div>
            </div>

        </div>
    );
};

export default CompleteOrder;