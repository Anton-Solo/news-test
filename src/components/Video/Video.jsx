import { useEffect, useState } from 'react';
import styles from './Video.module.css';

import { useHttp } from '../../hooks/http.hook';
import VideoItem from '../../containers/VideoItem';

const Video = () => {
    const {request} = useHttp();
    const [videoList, setVideoList] = useState([]);
    const [mainVideo, setMainVideo] = useState(null);

    useEffect(() => {
        request(("http://localhost:3001/video?_limit=5"))
            .then(data => setVideoList(data));
    }, []);

    useEffect(() => {
        request(("http://localhost:3001/video?main=true"))
            .then(data => setMainVideo(data));
    }, [videoList]);

    const videoRender = arr => arr.map(video => video.main ? false : <VideoItem key={video.id} video={video} />)

    const videos = videoRender(videoList);

    return (
        <div className={styles.video}>
            <div className={styles.video__layout}>
                <div className='container'>
                    <div className={styles.video__head}>
                        <h2 className='h2'>Відео</h2>
                        <a className={styles.video__link} href="#">Більше новин</a>
                    </div>
                    { mainVideo &&<div className={styles.wrapper}>
                        <div className={styles.video__large}>
                            <img className={styles.video__img} src={mainVideo[0].image} alt={mainVideo[0].title} />
                            <div className={styles.video__date}>
                                <span>{mainVideo[0].date}</span>
                            </div>
                            <a href="#" className={styles.video__title}>
                                <span>{mainVideo[0].title}</span>
                            </a>
                        </div>
                        <div className={styles.video__small}>
                            {videos}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Video;
