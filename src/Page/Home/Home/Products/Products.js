import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [product] = useProducts();

    return (
        <div className='container'>

            <h2 className='products-title'> Inventory Items </h2>



            <div className='products-container'>



                {
                    product.slice(0, 6).map(p => <Product
                        key={p._id}
                        p={p}>

                    </Product>)
                }



            </div>
            <button className='inv-btn w-100 mb-2 p-4'> <Link to="/inventory">Go manage Inventory </Link> </button>
        </div>
    );
};

export default Products;