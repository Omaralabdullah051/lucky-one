import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addTocart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const hanldeChooseAgain = () => {
        const cart = [];
        setCart(cart);
    }

    return (
        <div>
            <h1 className='title-text'><i>Welcome To Laptop Store</i></h1>
            <h2 className='text-content'><i>Choose 4 Laptops</i></h2>
            <div className='container'>
                <div className='product-container'>
                    {
                        products.map(product =>
                            <Product product={product}
                                key={product.id}
                                addTocart={addTocart}
                            ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} hanldeChooseAgain={hanldeChooseAgain}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;