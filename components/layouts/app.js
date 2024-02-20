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
                        <img src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png" alt=""/>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
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