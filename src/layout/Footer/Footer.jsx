import React from 'react'
import cn from "classnames";

import vk from './vk.svg';
import telegram from './telegram.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__bar}>
                        <div className={styles.footer__row}>
                            <a href="#"><img src={vk} alt="Вконтакте" /></a>
                            <a href="#"><img src={twitter} alt="Вконтакте" /></a>
                            <a href="#"><img src={telegram} alt="Вконтакте" /></a>
                            <a href="#"><img src={youtube} alt="Вконтакте" /></a>
                        </div>
                        <div className={styles.footer__row}>
                            <a href="#">aDVERTISING</a>
                            <a href="#">tERMS oF uSE</a>
                            <a href="#">qUALITY cONTROL</a>
                            <a href="#">cOPYRIGHT</a>
                            <a href="#">sUPPORT</a>
                        </div>
                    </div>
                    <div className={styles.footer__line}></div>
                    <div className={styles.footer__copyright}>
                        <p className={styles["footer__copyright-developer"]}>© 2021 — 2022, mP3_dOT_vINYL</p>
                        <p className={styles["footer__copyright-company"]}>Project by <a href="https://github.com/Papilele" target="_blank">Mikhail Belovolov</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer