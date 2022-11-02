import Reduction from '../../components/Main/Reduction';
import Region from '../../components/Main/Region';
import Sidebar from '../../components/Sidebar';
import styles from './Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <Sidebar columnList={false}/>
                    <div className={styles.right}>
                        <Reduction />
                        <Region />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
