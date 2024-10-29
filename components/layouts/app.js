import React from 'react';
import styles from "../../styles/header.module.css"
import Footer from "../Footer/footer";
import Lastpage from "../Lastpage/lastpage";
const App = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src="/logo.png" alt="logo"/>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li><a href="/" style={{color:'white', textDecoration:'none'}}>Գլխավոր էջ</a></li>
                            <li><a href="/documents" style={{color:'white', textDecoration:'none'}}>Փաստաթղթեր</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <Lastpage/>
        </div>
    );
};

export default App;