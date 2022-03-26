import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, hanldeChooseAgain }) => {
    const [chooseOne, setOne] = useState('');

    const handleChooseOne = () => {
        const cartItems = cart.map(item => item.name);
        const chooseRandomly = cartItems[Math.floor(Math.random() * cartItems.length)];
        setOne(chooseRandomly);
    }

    return (
        <div className='cart'>
            <h2 className='cart-title'><i>Selected items</i></h2>
            <h5>{cart.map(item => <p key={item.id}>{item.name}</p>)}</h5>
            {chooseOne !== '' ? <><p>You can buy this item</p><h3>{chooseOne}</h3></> : null}
            <button className='btn-item' onClick={handleChooseOne}>Choose 1 For Me</button>
            <br /><br />
            <button className='btn-item' onClick={hanldeChooseAgain}>Choose Again</button>
        </div>
    );
};

export default Cart;