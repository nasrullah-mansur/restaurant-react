import { Fragment, useContext } from 'react';
import CartItem from './CartItem';
import Button from '../UI/Button';
import CardContext from '../../store/cart-context';

import classes from './Cart.module.css';

const Cart = (props) => {

    const cartCtx = useContext(CardContext);

    const cartItems = cartCtx.items;

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const removeFromCartHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const amountPlusHandler = (id) => {
        const existItem = cartCtx.items.findIndex(item => item.id === id);
        if(existItem === -1) return;
        let updateItem = cartCtx.items[existItem];
        if(updateItem.amount >= 10) return;
        updateItem = {...updateItem, amount: updateItem.amount + 1}
        cartCtx.updateItem(id, updateItem);
    }

    const amountMinusHandler = (id) => {
        const existItem = cartCtx.items.findIndex(item => item.id === id);
        if(existItem === -1) return;
        let updateItem = cartCtx.items[existItem];
        if(updateItem.amount === 1) return;
        updateItem = {...updateItem, amount: updateItem.amount - 1}
        cartCtx.updateItem(id, updateItem);
    }

    const clearHandler = () => {
        cartCtx.clearCart();
    }

    return (
        <Fragment>
            <div className={classes.cart__content}>
                <div className={classes['cart__content--title']}>
                    <span>Image</span>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Amount</span>
                    <span>Total</span>
                    <span>Action</span>
                </div>
                {cartItems.length === 0 ? 
                    <div className={classes.cart__item__blank}>
                        <p>No Item Found</p>
                    </div>
                    :
                    <div className={classes.cart__items}>
                        {cartItems.map((cart) => {
                            return (
                                <CartItem 
                                id={cart.id}
                                key={cart.id} 
                                src={cart.src} 
                                alt={cart.alt} 
                                title={cart.title}
                                price={cart.price}
                                amount={cart.amount}
                                onRemoveFromCart={removeFromCartHandler}
                                onPlus={amountPlusHandler}
                                onMinus={amountMinusHandler}
                                />
                            );
                        })}
                    </div>
                }
            </div>
            <div className={classes.cart__footer}>
                <h3>Total Amount: ${totalAmount}</h3>
                <Button type="button">Checkout</Button>
                <Button onClick={clearHandler} type="button" className={classes.clear__btn}>Clear</Button>
            </div>
        </Fragment>
    );
}

export default Cart;