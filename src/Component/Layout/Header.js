
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Container from '../UI/Container';

import logo from '../../logo.svg';
import classes from './Header.module.css';
import { Fragment, useContext, useState } from 'react';
import Modal from '../UI/Modal';
import Cart from '../Cart/Cart';
import CardContext from '../../store/cart-context';

const Header = () => {
    const [modalActive, setModalActive] = useState(false);

    const cartCtx = useContext(CardContext);

    const addModalHandler = () => {
        setModalActive(true);
        document.body.style.overflow = 'hidden';
    }

    const removeModalHandler = () => {
        setModalActive(false);
        document.body.style.overflow = 'scroll';
    }


    return (
        <Fragment>
            <header className={classes.header}>
                <Container>
                    <div className={classes.header__content}>
                        <div className={classes['header__content--logo']}>
                            <img src={logo} alt="Brand Logo" />
                            <span>Restaurant</span>
                        </div>
                        <div className={classes['header__content--list']}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div onClick={addModalHandler} className={`${classes['header__content--cart']} `}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className="count">{cartCtx.items.length}</span>
                        </div>
                    </div>
                </Container>
            </header>

            {modalActive && <Modal onRemove={removeModalHandler} title="Your Cart Items"> <Cart /> </Modal>}
        </Fragment>
    );
}

export default Header;