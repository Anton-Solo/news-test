import { useEffect, useState } from 'react';
import styles from './SectionPromo.module.css';
import './SectionPromo.css';
import cn from 'classnames';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useHttp } from '../../../hooks/http.hook';

import promo from './img/promo.png';
import arrow from './img/arrow.svg';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={className} src={arrow} alt="arrow" onClick={onClick} />
    );
}

const SectionPromo = () => {
    const {request} = useHttp();
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        request(("http://localhost:3001/promo"))
            .then(data => setPromos(data));
    }, []);

    const settings ={
        dots: false,
        infinite: false,
        speed: 500,
        slideToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slideToShow: 3,
                }
            }
        ]
    }

    return (
        <div className={styles.section}>
            <div className={styles.section__head}>
                <h2 className='h2'>Промо</h2>
                <a href="#" className={styles.section__link}>Всі матеріали</a>
            </div>
            <div className={styles.promo__main}>
                <img className={styles.promo__img} src={promo} alt="promo" />
                <div className={styles.main__wrap}>
                    <p className={styles.promo__date}>
                        <span>05 серпня 11:00</span>
                        <span className={styles.promo__logo}>Промо</span>
                    </p>
                    <p className={styles.promo__title}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів</p>
                </div>
            </div>
            <div className='promo__slider'>
                <Slider {...settings}>
                {
                    promos.map(({id, date, title}) => <div key={id} className={styles.promo__item}>
                        <span className={cn(styles.promo__date, styles.slider__date)}>{date}</span>
                        <span className={styles.slider__title}>{title.substring(0, 50)}{title.length >= 50 && '...'}</span>
                    </div>)
                }
                </Slider>
            </div>
        </div>
    );
}

export default SectionPromo;
