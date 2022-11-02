import { useEffect, useState } from 'react';
import styles from './Region.module.css';
import './Region.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {useHttp} from '../../../hooks/http.hook';

const Region = () => {
    const {request} = useHttp();
    const [kiyvPosts, setKiyvPosts] = useState([]);
    const [odessaPosts, setOdessaPosts] = useState([]);
    const [kharkivPosts, setKharkivPosts] = useState([]);

    useEffect(() => {
        request(("http://localhost:3001/posts?region=Kiyv&_limit=5"))
            .then(data => setKiyvPosts(data));
        
        request(("http://localhost:3001/posts?region=Kharkiv&_limit=5"))
            .then(data => setKharkivPosts(data));
        
        request(("http://localhost:3001/posts?region=Odessa&_limit=5"))
            .then(data => setOdessaPosts(data));
    }, []);

    const settings ={
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className='region'>
            <div className={styles.region__head}>
                <h2 className='h2'>Регіони</h2>
                <a className={styles.region__link} href="#">Всі новини розділу</a>
            </div>
            <div className='region__wrapper'>
                <Slider {...settings}>
                    <div className={styles.region__city}>
                        <h3 className='h3'>Київ</h3>
                        <div className={styles.city__wrapper}>
                                {
                                    kiyvPosts.map(post => {
                                        return <div key={post.id} className={styles.region__post}>
                                                <span className={styles.region__time}>{post.time}</span>
                                                <span className={styles.region__title}>{post.title}</span>
                                            </div>
                                    })
                                }
                        </div>
                        <a href="#" className={styles.more}>Більше новин</a>
                    </div>
                    <div className={styles.region__city}>
                        <h3 className='h3'>Одеса</h3>
                        <div className={styles.city__wrapper}>
                            {
                                odessaPosts.map(post => {
                                    return <div key={post.id} className={styles.region__post}>
                                            <span className={styles.region__time}>{post.time}</span>
                                            <span className={styles.region__title}>{post.title}</span>
                                        </div>
                                })
                            }
                        </div>
                        <a href="#" className={styles.more}>Більше новин</a>
                    </div>
                    <div className={styles.region__city}>
                        <h3 className='h3'>Харків</h3>
                        <div className={styles.city__wrapper}>
                            {
                                kharkivPosts.map(post => {
                                    return <div key={post.id} className={styles.region__post}>
                                            <span className={styles.region__time}>{post.time}</span>
                                            <span className={styles.region__title}>{post.title}</span>
                                        </div>
                                })
                            }
                        </div>
                        <a href="#" className={styles.more}>Більше новин</a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Region;
