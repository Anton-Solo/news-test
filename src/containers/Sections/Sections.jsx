import SectionItem from '../../components/Sections/SectionItem';
import Sidebar from '../../components/Sidebar';
import styles from './Sections.module.css';

import politics from './img/politics.png';
import lifestyle from './img/lifestyle.png';
import SectionPromo from '../../components/Sections/SectionPromo';

const Sections = () => {
    return (
        <div className={styles.sections}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <Sidebar columnList={true}/>
                    <div className={styles.right}>
                        <SectionItem name={'Політика'} img={politics}/>
                        <SectionPromo />
                        <SectionItem name={'Економіка'} img={politics}/>
                        <SectionItem name={'Лайфстайл'} img={lifestyle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sections;
