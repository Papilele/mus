import React from 'react'
import cn from "classnames";

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <a href="#" className={styles.header__logo}>
                        mP3_dOT_vINYL
                    </a>
                    <input type="input" className={styles.header__search} placeholder='Kanye West'></input>
                    <div className={styles.header__bar}>
                        <a href="#" className={styles.bar__item}>cONTAC uS</a>
                        <a href="#" className={styles.bar__item}>dELIVERY</a>
                        <a href="#" className={styles.bar__item}>cART</a>                          
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header