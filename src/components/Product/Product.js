import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addTocart }) => {
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
                <button onClick={() => addTocart(product)} className='cart-btn'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;