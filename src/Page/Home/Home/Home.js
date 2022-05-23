import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Information from './Information/Information';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Products></Products>
            <Information></Information>
        </div>
    );
};

export default Home;