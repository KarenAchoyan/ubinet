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
                    <h1>Ինտերնետ պրովայդեր</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet architecto atque
                        commodi consequuntur distinctio, doloribus ex iste laborum, maxime molestiae nemo nostrum quasi
                        quo recusandae sapiente totam velit!</p>
                    <Button type={'primary'}>Զանգել</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;