import React from 'react';
import styles from "../../styles/about.module.css"
import {Button} from "antd";
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutColumn}>
                    <h1><span>Live Sport </span>and TV-shows for best friends</h1>
                    <p>Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis turpis et gravida interdum. Nulla facilisi. Pellentesque imperdiet, sem et commodo interdum, justo velit sagittis metus erat sed purus.</p>
                    <Button type={'primary'}>Զանգել</Button>
                </div>
                <div className={styles.aboutColumn}>
                    <img className={styles.aboutImage} src="/2.webp" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;