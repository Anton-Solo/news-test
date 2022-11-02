import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';

import SidebarItem from '../../containers/SidebarItem';
import SidebarColumn from '../../containers/SidebarColumn';
import {useHttp} from '../../hooks/http.hook';

import loadMore from './img/load-more.svg';

const Sidebar = ({columnList}) => {
    const {request} = useHttp();
    const [posts, setPosts] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        request(("http://localhost:3001/posts?_page=1&_limit=10"))
            .then(data => setPosts(data));
        request(("http://localhost:3001/columns?_limit=4"))
            .then(data => setColumns(data));
    }, []);

    if (columnList) {
        return (
            <aside className={cn(styles.sidebar, styles.sidebar__column)}>
                <div className={styles.sidebar__head}>
                    <h3 className='h3'>Колонки</h3>
                    <a className={styles.sidebar__link} href="#">Всі колонки</a>
                </div>
                <div className={styles.posts}>
                    {
                        columns.map(data => <SidebarColumn key={data.id} data={data}/>)
                    }
                </div>
                <button className={styles.load}>Всі колонки</button>
            </aside>
        );
    } else {
        return (
            <aside className={styles.sidebar}>
                <div className={styles.sidebar__head}>
                    <h3 className='h3'>Всі новини</h3>
                    <a className={styles.sidebar__link} href="#">Архів</a>
                </div>
                <div className={styles.sidebar__tabs}>
                    <button className={cn(styles.active, styles.tab)}>Всі</button>
                    <button className={styles.tab}>Новини</button>
                    <button className={styles.tab}>Статті</button>
                </div>
                <div className={styles.posts}>
                    {
                        posts.map(data => <SidebarItem key={data.id} data={data}/>)
                    }
                </div>
                <button className={styles.load}>
                    <img src={loadMore} alt="load-more" />
                    <span>Завантажити ще</span>
                </button>
            </aside>
        );
    }
    
}

Sidebar.propTypes = {
    columnList: PropTypes.bool
}

export default Sidebar;
