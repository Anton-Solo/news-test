import { useEffect, useState } from 'react';
import styles from './Reduction.module.css';

import {useHttp} from '../../../hooks/http.hook';
import news from './img/newss.png';

const Reduction = () => {
    const {request} = useHttp();
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        request(("http://localhost:3001/reduction"))
            .then(data => setPostsList(data));
    }, []);

    return (
        <>
            <h2 className="h2">Вибір редакції</h2>
            <div className={styles.reduction__wrapper}>
                {
                    postsList.map(post => 
                        <div key={post.id} className={styles.reduction__item}>
                            <img className={styles.reduction__img} src={news} alt={post.title} />
                            <div className={styles.reduction__date}>
                                <span>{post.date}</span>
                            </div>
                            <div className={styles.reduction__title}>
                                <span>{post.title}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Reduction;
