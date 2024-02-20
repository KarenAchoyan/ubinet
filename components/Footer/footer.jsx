import React, {useEffect, useState} from 'react';
import styles from "../../styles/footer.module.css"
import {
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import Lastpage from "../Lastpage/lastpage";


const Footer = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            }else{
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div>
            <footer className={styles.footer}>
                <div>
                    <img src="/logo.png" alt="logo" className="logo"/>
                    <div className={styles.socials}>
                        <div className={styles.itemSocial}>
                            <a href="https://www.instagram.com/poel.am/" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined/>
                            </a>
                        </div>
                        <div className={styles.itemSocial}>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.facebook.com/profile.php?id=100064626914118&mibextid=LQQJ4d">
                                <FacebookOutlined/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.pages}>
                    <div>
                        <h4>ՀԵտադարձ կապ</h4>
                        <ul>
                            <li><span><MailOutlined/></span><a href={"mailto:info@ubinet.am"}>info@ubinet.am</a></li>
                            <li><span><PhoneOutlined/></span><a
                                href={`whatsapp://send?phone=+37495388218`}>+37495388218</a></li>
                        </ul>

                    </div>
                </div>
            </footer>

            <Lastpage scroll={scroll}/>

        </div>
    );
};

export default Footer;