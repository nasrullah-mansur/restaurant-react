
import Container from '../UI/Container';
import { Fragment, useContext } from 'react';
import FoodItem from './FoodItem';
import CardContext from '../../store/cart-context';

import classes from './Food.module.css';

const Food = () => {

    const cartCtx = useContext(CardContext);
    

    const onAddToCartHandler = (item) => {
      cartCtx.addItem(item);
    }

    const foods = [
        {
            id: '01',
            src: "./foods/Chicken_Burger.jpg",
            alt: "this is alt text",
            title: "Chicken Burger",
            price: 12,
            ratting: 4,
        },
        {
          id: '02',
            src: "./foods/Chicken_Cheese_Pizza.jpg",
            alt: "this is alt text",
            title: "Chicken Cheese Pizza",
            price: 15,
            ratting: 5,
        },
        {
          id: '03',
            src: "./foods/Chicken_Fry.jpg",
            alt: "this is alt text",
            title: "Chicken Fry",
            price: 32,
            ratting: 2,
        },
        {
          id: '04',
            src: "./foods/Chicken_Sandwich.jpg",
            alt: "this is alt text",
            title: "Chicken Sandwich",
            price: 7,
            ratting: 5,
        },
        {
          id: '05',
            src: "./foods/Fry_Nurger.jpg",
            alt: "this is alt text",
            title: "Fry Nurger",
            price: 10,
            ratting: 5,
        },
        {
          id: '06',
            src: "./foods/Grill_Chicken.jpg",
            alt: "this is alt text",
            title: "Grill Chicken",
            price: 3,
            ratting: 5,
        },
        {
          id: '07',
            src: "./foods/Pasta.jpg",
            alt: "this is alt text",
            title: "Pasta",
            price: 44,
            ratting: 5,
        },
        {
          id: '08',
            src: "./foods/Seekh_Kebab.jpg",
            alt: "this is alt text",
            title: "Seekh Kebab",
            price: 43,
            ratting: 5,
        },
        {
          id: '09',
            src: "./foods/Spaghetti.jpg",
            alt: "this is alt text",
            title: "Spaghetti",
            price: 18,
            ratting: 5,
        },
    ];

    return (
        <div className={classes.foods}>
            <h3>Chose Your Favorite Food</h3>
            <Container>
                <div className={classes.foods__container}>
                    {foods.map((food) => {

                        const isActiveExist =  cartCtx.items.filter(item => {
                          return item.id === food.id;
                        })

                        return (
                            <Fragment key={food.id}>
                                <FoodItem 
                                id={food.id}
                                src={food.src} 
                                alt={food.alt} 
                                title={food.title} 
                                price={food.price} 
                                ratting={food.ratting}
                                isActive={isActiveExist.length === 0 ? false : true}
                                onAddToCart={onAddToCartHandler}
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Food;