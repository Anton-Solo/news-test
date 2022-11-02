import PropTypes from 'prop-types';
import styles from './VideoItem.module.css';

const VideoItem = ({video}) => {
    return (
        <div key={video.id} className={styles.video__small}>
            <img className={styles.video__img} src={video.image} alt={video.title} />
            <div className={styles.video__date}>
                <span>{video.date}</span>
            </div>
            <a href="#" className={styles.video__title}>
                <span>{video.title.substring(0, 57)}{video.title.length >= 57 && '...'}</span>
            </a>
        </div>
    )
}

VideoItem.propTypes = {
    video: PropTypes.object
}

export default VideoItem;
