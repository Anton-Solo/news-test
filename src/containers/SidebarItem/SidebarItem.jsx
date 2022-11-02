import styles from './SidebarItem.module.css';
import cn from 'classnames';

const SidebarItem = ({data}) => {
    return (
        <a href="#" className={styles.item}>
            { data.photo && <p className={styles.item__photo}>Новина з фото</p>}
            { data.hot && <p className={styles.item__hot}>Термінова новина</p>}
            <span className={styles.item__time}>{data.time}</span>
            <span className={cn(styles.item__title)}>{data.title}</span>
        </a>
    );
}

export default SidebarItem;
