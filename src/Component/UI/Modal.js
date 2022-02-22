import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = (props) => {
   
    const modalElem = document.getElementById('modal');

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <div onClick={props.onRemove} className={classes.modal__overlay}></div>
                    <div className={classes.modal}>
                        <div className={classes.modal__title}>
                            <h3>{props.title}</h3>
                            <span onClick={props.onRemove} className={classes.modal__close}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </div>
                        <div className={classes.modal__content}>{props.children}</div>
                    </div>
                </Fragment>                
                , modalElem)}
        </Fragment>
    );
}

export default Modal;