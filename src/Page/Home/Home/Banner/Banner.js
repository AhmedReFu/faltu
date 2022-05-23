import React from 'react';
import './Banner.css'
import banner from '../../../../images/banare.a718c798231f2b119da9.png'

const Banner = () => {
    return (
        <div className='container'>
            <img className='banner' src={banner} alt="" />
        </div>
    );
};

export default Banner;