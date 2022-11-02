import styles from './Footer.module.css';
import Categories from '../../components/Footer/Categories';

import youtube from './img/youtube.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import tiktok from './img/tiktok.png';
import google from './img/google.png';
import telegram from './img/telegram.png';


const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__top}>
                <div className='container'>
                    <div className={styles.categories__wrapper}>
                        <Categories />
                        <ul className={styles.web__cat}>
                            <li>
                                <a href="#">Про нас</a>
                            </li>
                            <li>
                                <a href="#">Контакти</a>
                            </li>
                            <li>
                                <a href="#">Структура власності</a>
                            </li>
                            <li>
                                <a href="#">Команда</a>
                            </li>
                            <li>
                                <a href="#">Медіакіт</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <h3 className='h3'>Новини у зручному форматі</h3>
                        <ul className={styles.social__links}>
                            <li>
                                <a className={styles.link} href="youtube.com">
                                    <img className={styles.link__img} src={youtube} alt="youtube" />
                                    <span className={styles.link__name}>YouTube</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="telegram.com">
                                    <img className={styles.link__img} src={telegram} alt="telegram" />
                                    <span className={styles.link__name}>Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="instagram.com">
                                    <img className={styles.link__img} src={instagram} alt="instagram" />
                                    <span className={styles.link__name}>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="facebook.com">
                                    <img className={styles.link__img} src={facebook} alt="facebook" />
                                    <span className={styles.link__name}>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="tiktok.com">
                                    <img className={styles.link__img} src={tiktok} alt="tiktok" />
                                    <span className={styles.link__name}>TikTok</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="news.google.com">
                                    <img className={styles.link__img} src={google} alt="google news" />
                                    <span className={styles.link__name}>Google News</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className='container'>
                    <div className={styles.copyright}>
                        <span>© 2020-2022, ТОВ «Медіа Мережі»</span>
                    </div>
                    <div className={styles.rules}>
                        <a className={styles.rules__link} href="#">Політика користувача</a>
                        <a className={styles.rules__link} href="#">Політика конфіденційності</a>
                        <a className={styles.rules__link} href="#">Політика Cookie-файлів</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
