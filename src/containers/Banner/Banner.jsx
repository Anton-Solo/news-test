import styles from './Banner.module.css';
import './Banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

import {useHttp} from '../../hooks/http.hook';
import arrowNext from './img/arrow-next.svg';
import arrowPrev from './img/arrow-prev.svg';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={className} src={arrowNext} alt="arrow" onClick={onClick} />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={className} src={arrowPrev} alt="arrow" onClick={onClick} />
    );
}

const Banner = () => {
    const {request} = useHttp();
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    useEffect(() => {
        request(("http://localhost:3001/banner"))
            .then(data => setSlides(data));
    }, []);

    const handleAfterChange = index => {
        setCurrentSlide(index)
    }

    const settings ={
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        rows: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className={styles.banner}>
            <div className='banner__wrapper'>
                <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                    {slides.map(slide => (
                        <div key={slide.id}  className={styles.banner__wrap}>
                            <img className={styles.banner__img} src={slide.image} alt={slide.title} />
                            <div className='container'>
                                <p className={styles.banner__title}>{slide.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            
            <div className='preview__wrapper'>
                <div className='container'>
                    <Slider {...settings2} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                        {slides.map(slide => (
                            <div key={slide.id} className={styles.slide__preview}>
                                <img className={styles.preview__img} src={slide.image} alt={slide.title} />
                                <span className={styles.preview__title}>{slide.title.substring(0, 72)}{slide.title.length >= 72 && '...'}</span>
                            </div>
                        ))}
                    </Slider>
                    <div className={styles.counter__wrapper}>
                        <div className={styles.slides__counter}>
                            {currentSlide + 1} / {slides.length}
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Banner;
