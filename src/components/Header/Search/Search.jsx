import styles from './Search.module.css';
import img from './img/search.svg';
import { useRef } from 'react';

const Search = () => {
    const input = useRef(null);

    const handelSearch = (e) => {
        e.preventDefault();
        const inp = input.current;
        inp.classList.contains('active') ? inp.classList.remove('active') : inp.classList.add('active');
    }

    return (
        <form className={styles.search}>
            <input ref={input} className={styles.search__input} type="text" placeholder="пошук новин" />
            <button onClick={handelSearch} className={styles.search__submit} type="submit">
                <img src={img} alt="Search icon" />
            </button>
        </form>
    );
}

export default Search;
