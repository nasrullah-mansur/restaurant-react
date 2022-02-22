import classes from './Button.module.css';

const Button = (props) => {

    const onClickHandler = () => {
        if(!props.onClick) return;
        props.onClick();
    }

    return (
        <button className={`${classes.custom__btn} ${props.className}`} onClick={onClickHandler}>{props.children}</button>
    );
}

export default Button;