
import Button from '../UI/Button';
import Ratting from '../UI/Ratting';
import classes from './FoodItem.module.css';


const FoodItem = (props) => {
    
    const price = props.price.toFixed(2);

    return (
        <div className={classes['food__food--item']}>
            <img src={props.src} alt={props.alt} />
            <div className={classes['food__food--content']}>
                <div className={classes['food__food--price']}>
                    <div className={classes['food__food--price--left']}>
                        <h4>{props.title}</h4>
                        <Ratting ratting={props.ratting} />
                    </div>
                    <div className={classes['food__food--price--right']}>
                        <span>${price}</span>
                    </div>
                </div>
                <div className={classes.food__item__footer}>
                    {props.isActive ?  
                        <Button className={classes['full_width_btn--active']} type="button">Added to cart</Button>
                        :
                        <Button onClick={props.onAddToCart.bind(null, props)} className={classes.full_width_btn} type="button">Add to cart</Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default FoodItem;