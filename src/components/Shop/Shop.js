import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [chooseOne, setOne] = useState('');

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addTocart = (product) => {
        const exist = cart.find(item => item === product);
        if (!exist) {
            if (cart.length < 4) {
                const newCart = [...cart, product];
                setCart(newCart);
            }
            else {
                alert("Opps! you can't add more than 4 item");
            }
        }
    }

    const hanldeChooseAgain = () => {
        const cart = [];
        setCart(cart);
    }

    const handleChooseOne = () => {
        const cartItems = cart.map(item => item.name);
        const chooseRandomly = cartItems[Math.floor(Math.random() * cartItems.length)];
        setOne(chooseRandomly);
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
                    <Cart cart={cart} hanldeChooseAgain={hanldeChooseAgain} chooseOne={chooseOne} handleChooseOne={handleChooseOne}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;