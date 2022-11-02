import styles from './Categories.module.css';
import './categories.css';
import cn from 'classnames';

import {useHttp} from '../../../hooks/http.hook';
import { useEffect, useState } from 'react';

import arrow from './img/arrow-down.svg';

const Categories = () => {
    const {request} = useHttp();
    const [categories, setCategories] = useState([]);
    const [firstList, setfirstList] = useState([]);
    
    useEffect(() => {
        request(("http://localhost:3001/categories"))
            .then(data => setCategories(data));

        request(("http://localhost:3001/categories?main=true"))
            .then(data => setfirstList(data));
    }, []);

    const handleSubCat = (e) => {
        e.preventDefault();
        const subcat = e.target.nextElementSibling;
        const image = e.target.querySelector('img');
        subcat.classList.contains('active') ? subcat.classList.remove('active') : subcat.classList.add('active');
        image.classList.contains('image') ? image.classList.remove('image') : image.classList.add('image');
    }

    const renderCatList = (arr) => {
        if (arr.length === 0) {
            return false;
        }

        return arr.map(category => {
            if(category.id > 4) {
                if (category.subcat) {
                    return <div key={category.id} className={styles.category__item}>
                                <a className={styles.category} href="#" onClick={handleSubCat}>
                                    <span>{category.name}</span>
                                    <img src={arrow} alt="arrow" />
                                </a>
                                <ul className={cn(styles.subcategory)}>
                                    {category.subcat.map(cat => <li key={cat.id}><a className={styles.subcategory__link} href="#">{cat.name}</a></li>)}
                                </ul>
                            </div>
                } else {
                    return <div key={category.id} className={styles.category__item}>
                                <a className={styles.category} href="#">{category.name}</a>
                            </div>
                }
            } 
        });
    }

    const cats = renderCatList(categories);

    return (
        <>
            <ul className={styles.first__list}>
                {
                    firstList.map(category => <li key={category.id}>
                                            <a className={styles.category} href="#">    
                                                {category.name}
                                            </a>
                                            {
                                                category.subcat && <ul className={styles.subcategory}>
                                                                        {category.subcat.map(cat => <li key={cat.id}><a className={styles.subcategory__link} href="#">{cat.name}</a></li>)}
                                                                    </ul>
                                            }
                                        </li>)
                }
            </ul>
            <div className={styles.categories}>
                {cats} 
            </div> 
        </>
    );
}

export default Categories;
