import { useState } from "react";
import CardContext from "./cart-context";

const CardProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        const updateItem = {...item, amount: 1};
        const updateItems = [...cartItems, updateItem];
        setCartItems(updateItems);
    }

    const removeItemHandler = (id) => {
        const checkExistItem = cartItems.findIndex(item => item.id === id);
        if(checkExistItem === -1) return;
    
        const updateItems = cartItems.filter((_, index) => {
            return index != checkExistItem;
        })

        setCartItems(updateItems);
    }

    const updateItemHandler = (id, item) => {
        const updateItems = cartItems.map(i => {
            if(i.id === id) {
                return item;
            }
            return i;
        })

        setCartItems(updateItems);
    }

    const clearCartHandler = () => {
        setCartItems([]);
    }


    // Total Price;
    const cartItemsPrice = cartItems.map(item => {
        return item.price * item.amount;
    });

    const totalAmount = cartItemsPrice.reduce((prev, next) => (prev + next), 0);

    const providerValue = {
        items: cartItems,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        updateItem: updateItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }


    return (
        <CardContext.Provider value={providerValue}>
        {props.children}
        </CardContext.Provider>
    );
}

export default CardProvider;
