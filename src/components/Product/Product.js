import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { image, name, id, price } = product;
    return (
        <div>
            <div className='product'>
                <img src={image} alt="" />
                <div className='product-info'>
                    <h3>Name: {name}</h3>
                    <h4>Id: {id}</h4>
                    <h4>Price: {price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;