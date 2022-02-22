import Container from '../UI/Container';

import classes from './Banner.module.css';

const Banner = () => {
    return (
        <section id="banner" className={classes.banner} style={{ 
            backgroundImage: 'url(./banner_bg.jpg)',
         }}>
            <Container>
                <h1>WELCOME TO MY RESTAURANT</h1>
            </Container>
        </section>
    );
}

export default Banner;