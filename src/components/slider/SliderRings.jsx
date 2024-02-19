import React from 'react';
import './slider.css'

const SliderRings = () => {

    const imgRing = [
        "ring1", "ring2", "ring3", "ring4", "ring5", "ring6", "ring7", "ring8", "ring9", "ring10", "ring11", "ring12", "ring13", "ring14", "ring15"
    ];

    return (
        <div className='slider'>
            <div className="title">
                Rockstar collection
            </div>
            <div className="slider__rings">
                <div className="rings">
                    {imgRing.map((el, index) => (
                        <div key={index} className="ring">
                            <img src={`./img/${el}.png`} alt="ring" />
                        </div> 
                    ))}
                </div>
                <div className="rings">
                    {imgRing.map((el, index) => (
                        <div key={index} className="ring">
                            <img src={`./img/${el}.png`} alt="ring" />
                        </div> 
                    ))}
                </div>

            </div>
            

        </div>
    );
};

export default SliderRings;