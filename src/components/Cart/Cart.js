import React from 'react';
import './Cart.css'

const Cart = ({ cart, hanldeChooseAgain, chooseOne, handleChooseOne }) => {


    return (
        <div className='cart'>
            <h2 className='cart-title'><i>Selected items</i></h2>
            <h5>{cart.map(item => <p key={item.id}>{item.name}</p>)}</h5>
            {chooseOne !== '' && cart.length !== 0 ? <div className='choose-one-text'><p>You can buy this item</p><h4>{chooseOne}</h4></div> : null}
            <button className='btn-item' onClick={handleChooseOne}>Choose 1 For Me</button>
            <br></br>
            <br></br>
            <button className='btn-item' onClick={hanldeChooseAgain}>Choose Again</button>
        </div>
    );
};

export default Cart;