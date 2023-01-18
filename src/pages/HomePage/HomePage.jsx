import React, { useState } from 'react';

import styles from "./HomePage.module.scss";

import video from './videocut.mp4';

const HomePage = () => {
    return (
      <main className={ styles.home}>
        <div className="container">
          <div className={styles.home__wrapper}>
            <video autoPlay muted loop preload="auto" type="video/mp4" src={video}>
            </video>
            <div className={styles.home__content}>
              <div className={styles.home__title}>mP3_dOT_vINYL</div>
              <div className={styles.home__text}>mATERIALIZE tHE aLBUMS oF yOUR fAVORITE aRTISTS aND tHE wORLD'S bEST rELEASES iNTO vINYL rECORDS. hUGE aSSORTMENT. yOU wILL fIND wHAT yOU aRE lOOKING fOR.<br></br>&or; &or; &or; &or; &or; &or; &or;</div>
              <a href="#" className={styles.home__button}>cATALOG</a>
            </div>

          </div>          
        </div>

      </main>
    )
}

export default HomePage