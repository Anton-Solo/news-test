import styles from './Menu.module.css';

import icon from './img/union.svg';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <img className={styles.menu__img} src={icon} alt="menu icon" />
            <span className={styles.menu__name}>Меню</span>
        </div>
    );
}

export default Menu;
