import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classes from './Ratting.module.css';

const Ratting = (props) => {
    return (
        <div className={classes.ratting}>
        {[...Array(5)].map((_, index) => {
            return (
                <FontAwesomeIcon 
                    key={index} 
                    icon={faStar} 
                    className={`${classes.ratting__icon} ${props.ratting > index && classes['ratting__icon--active']}`} 
                />
            );
        })}
    </div>
    );
}

export default Ratting;