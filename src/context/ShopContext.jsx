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
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] = null}))
    }

    const addOne = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
    }

    const reduceOne = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))   
    }

    const TotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product) =>
                    product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const totalCartItems = () => {
        let totalItems = 0;

        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, TotalCartAmount, totalCartItems, addOne, reduceOne};
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