import React from 'react';
import './collection.css'

const Collection = () => {


    return (
        <div className='collection'>
            <div className="left__section">
                <div className="product__">
                    <div className="product__inner">
                        <div className="title__prod">
                            <p>Necklace with diamonds</p>
                            <span>5500$</span>
                        </div>
                        <div className="img__prod">
                            <img src="./img/necklace.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="product__">
                    <div className="product__inner">
                        <div className="title__prod">
                            <p>Сonstellation bracelet</p>
                            <span>3500$</span>
                        </div>
                        <div className="img__prod">
                            <img src="./img/bracelet.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right__section">
                <div className="product__">
                    <div className="product__inner">
                        <div className="title__prod">
                            <p>Whatch star brrilliant</p>
                            <span>6000$</span>
                        </div>
                        <div className="img__prod">
                            <img src="./img/whatch.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="product__">
                    <div className="product__inner">
                        <div className="title__prod">
                            <p>Two star earrings</p>
                            <span>3500$</span>
                        </div>
                        <div className="img__prod">
                            <img src="./img/earrings.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;