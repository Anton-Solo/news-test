import { useState, useRef } from 'react';
import styles from './Lang.module.css';

const Lang = () => {
    const [lang, setLang] = useState('UA');
    const modal = useRef(null);

    const handelModal = () => {
        modal.current.classList.contains('active') ? modal.current.classList.remove('active') : modal.current.classList.add('active');
    }

    return (
        <>
            <div className={styles.lang}>
                <a href='#'>RU</a>
                <a className={styles.active} href='#'>UA</a>
            </div>
            <div className={styles.lang__mobile}>
                <a href='#' onClick={handelModal}>{lang}</a>
                <ul ref={modal} className={styles.lang__modal}>
                    <li onClick={() => setLang('UA')}>
                        UA
                    </li>
                    <li onClick={() => setLang('RU')}>
                        RU
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Lang;
