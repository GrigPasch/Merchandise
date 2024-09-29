import React, {createContext, useState} from 'react'
import all_products from '../assets/all_products'
import PropTypes from 'prop-types';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
        
    for(let index = 0; index < all_products.length; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart};
    //console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// we render children as node because it is a renderable react element
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ShopContextProvider