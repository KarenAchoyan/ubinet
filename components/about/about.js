import React from 'react';
import styles from "../../styles/about.module.css"
import {Button} from "antd";
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutColumn}>
                    <h1><span>Ինտերնետ</span>ծառայություններ</h1>
                    <p>Ubinet-ը մատուցում է ինտերնետ ծառայություններ: Գերարագ և հուսալի ինտերնետ ձեր տան համար</p>
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