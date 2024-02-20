import React from 'react';
import styles from "../../styles/banner.module.css"
import {Button} from "antd";


const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.cover}/>
            <img
                src="/1.jpg"
                alt=""/>
            <div className={styles.bannerContent}>
                <div className={styles.bannerInfo}>
                    <img src="/forBanner.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;