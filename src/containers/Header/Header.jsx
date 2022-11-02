import Menu from '../../components/Header/Menu';
import Search from '../../components/Header/Search';
import Lang from '../../components/Header/Lang';
import styles from './Header.module.css';
import './header.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import telegram from '../../static/Telegram.png';
import instagram from '../../static/Instagram.png';
import facebook from '../../static/Facebook.png';
import youtube from '../../static/YouTube.png';
import dot from './img/dot.png';

const settings ={
    slidesToShow: 7,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
}

const Header = () => {
    return (
        <header>
            <div className={styles.header__top}>
                <div className='container'>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__left}>
                            <Menu />
                            <div className={styles.city}>
                                <a className={styles.city__link} href=''>Київ</a>
                                <a className={styles.city__link} href=''>Одеса</a>
                                <a className={styles.city__link} href=''>Харків</a>
                            </div>
                        </div>
                        
                        <div className={styles.wrapper__right}>
                            <Search />
                            <div className={styles.social}>
                                <a href="#">
                                    <img src={telegram} alt="telegram" />
                                </a>
                                <a href="#">
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="#">
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src={youtube} alt="youtube" />
                                </a>
                            </div>
                            <Lang />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <div className='container'>
                    <div className={styles.wrapper}>
                       <div className='wrapper__left'>
                            <Slider {...settings}>
                                <a href="#" className={styles.category}>Війна</a>
                                <a href="#" className={styles.category}>Новини</a>
                                <a href="#" className={styles.category}>Політика</a>
                                <a href="#" className={styles.category}>Економіка</a>
                                <a href="#" className={styles.category}>Суспільство</a>
                                <a href="#" className={styles.category}>Погляди</a>
                                <a href="#" className={styles.category}>Світ</a>
                            </Slider>
                       </div>
                       <div className={styles.wrapper__right}>
                            <img className={styles.live__dot} src={dot} alt="live"></img>
                            <span className={styles.live__name}>Live</span>
                       </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
