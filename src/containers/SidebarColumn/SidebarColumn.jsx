import styles from './SidebarColumn.module.css';

const SidebarColumn = ({data}) => {
    return (
        <a href="#" className={styles.item}>
            <div className={styles.author}>
                <img className={styles.column__img} src={data.photo} alt={data.name}/>
                <div className={styles.author__wrapper}>
                    <span className={styles.autor__name}>{data.name}</span>
                    <span className={styles.author__position}>{data.position}</span>
                </div>
            </div>
            <p className={styles.column__title}>{data.title}</p>
            <p className={styles.column__date}>{data.data}</p>
        </a>
    );
}

export default SidebarColumn;
