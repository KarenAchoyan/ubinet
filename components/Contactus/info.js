import React from 'react';
import styles from "../../styles/contactus.module.css";

const Info = ({info,children}) => {
    return (
        <div className={styles.info}>
            <div>
                <div className={styles.iconContact}>{children}</div>
            </div>
            <div>
                <span>{info.title}</span>
                {info.info.map((item,index)=> (
                    <p key={index}>
                        <a href={`https://maps.google.com?q=${encodeURIComponent(item)}`}>{item}</a>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Info;