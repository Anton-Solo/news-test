import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SectionItem.module.css';

import { useHttp } from '../../../hooks/http.hook';

const SectionItem = ({name, img}) => {
    const {request} = useHttp();
    const [news, setNews] = useState([]);

    useEffect(() => {
        request(("http://localhost:3001/posts?_limit=5"))
            .then(data => setNews(data));
    }, []);

    return (
        <div className={styles.section}>
            <div className={styles.section__head}>
                <h2 className='h2'>{name}</h2>
                <a className={styles.section__link} href="#">Всі новини розділу</a>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__left}>
                    <div className={styles.main}>
                        <img className={styles.main__img} src={img} alt={name} />
                        <span className={styles.section__date}>05 серпня 11:00</span>
                        <span className={styles.main__title}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</span>
                    </div>
                    <ul className={styles.bottom}>
                        <li className={styles.bottom__item}>
                            <img className={styles.bottom__img} src={img} alt={name} />
                            <span className={styles.section__date}>05 серпня 11:00</span>
                            <span className={styles.bottom__title}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</span>
                        </li>
                        <li className={styles.bottom__item}>
                            <img className={styles.bottom__img} src={img} alt={name} />
                            <span className={styles.section__date}>05 серпня 11:00</span>
                            <span className={styles.bottom__title}>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.wrapper__right}>
                    <h4 className='h4'>Новини розділу</h4>
                    <div className={styles.news}>
                        {
                             news.map(post => (
                                <a key={post.id} href="#" className={styles.item}>
                                    { post.photo && <p className={styles.item__photo}>Новина з фото</p>}
                                    { post.hot && <p className={styles.item__hot}>Термінова новина</p>}
                                    <span className={styles.item__time}>{post.time}</span>
                                    <span className={styles.item__title}>{post.title}</span>
                                </a>
                             ))
                        }
                    </div>
                    <a className={styles.more}>Більше</a>
                </div>
            </div>
        </div>
    );
}

SectionItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
}

export default SectionItem;
