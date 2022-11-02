import styles from './Subheader.module.css';
import Marquee from 'react-double-marquee';

import air from './img/air.svg';
import arta from './img/arta.svg';
import bbm from './img/bbm.svg';
import helicopter from './img/helicopter.svg';
import people from './img/people.svg';
import rszv from './img/rszv.svg';
import tanks from './img/tanks.svg';

const Subheader = () => {
    return (
        <div className={styles.subheader}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <p className={styles.day}>131 день війни</p>
                    <marquee direction="left" scrollamount="5">
                        <div className={styles.destroy}>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={people} alt="people" />
                                        <span>особовий склад</span>
                                        <span className={styles.destroy__num}>~70 000</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={tanks} alt="tanks" />
                                        <span>танки</span>
                                        <span className={styles.destroy__num}>1589</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={arta} alt="arta" />
                                        <span>артсистеми</span>
                                        <span className={styles.destroy__num}>4578</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={air} alt="air" />
                                        <span>літаки</span>
                                        <span className={styles.destroy__num}>220</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={rszv} alt="rszv" />
                                        <span>РСЗВ</span>
                                        <span className={styles.destroy__num}>246</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={helicopter} alt="helicopter" />
                                        <span>гелікоптери</span>
                                        <span className={styles.destroy__num}>190</span>
                                </div>
                                <div className={styles.destroy__item}>
                                        <img className={styles.destroy__img} src={bbm} alt="bbm" />
                                        <span>ББМ</span>
                                        <span className={styles.destroy__num}>4578</span>
                                </div>
                        
                        </div>
                        </marquee>
                </div>
            </div>
        </div>
    );
}

export default Subheader;
