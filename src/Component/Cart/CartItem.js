import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './CartItem.module.css';

const CartItem = (props) => {

    const totalAmount = (props.price * props.amount).toFixed(2);
    const price = props.price.toFixed(2);

    return (
        <div className={classes.cart__item}>
            <div className={classes['cart__item--img']}>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className={classes['cart__item--title']}>
                <h4>{props.title}</h4>
            </div>
            <div className={classes['cart__item--price']}>
                <p>${price}</p>
            </div>
            <div className={classes['cart__item--amount']}>
                <p>
                    <span className={classes.item__count}>{props.amount}</span>
                    <span onClick={props.onMinus.bind(null, props.id)} className={classes.icon__minus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </span>
                    <span onClick={props.onPlus.bind(null, props.id)} className={classes.icon__plus}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </p>
            </div>
            <div className={classes['cart__item--total']}>
                <p>${totalAmount}</p>
            </div>
            <div className={classes['cart__item--action']}>
                <div onClick={props.onRemoveFromCart.bind(null, props.id)} className={classes.delete__btn}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    );
}

export default CartItem;