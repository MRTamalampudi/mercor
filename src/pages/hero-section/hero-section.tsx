import React, { FC } from 'react';
import styles from './hero-section.module.scss';
import png from "../../assets/images/1.png";
import NavBar from "./nav-bar/nav-bar";
import {
    arrow, insta,
    introCube1,
    introCube2,
    introPhone1,
    introPillar1,
    introStairs1,
    twitch,
    twitter
} from "../../assets/images";
import AppCard from "../../components/app-card/app-card";
import Footer from "../../components/footer/footer";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <div className={styles.HeroSection}>
      <div className={styles.imgContainer}>
          <img src={png}/>
      </div>

      <div className={styles.cube2}>
          <img src={introCube2}/>
      </div>
      <div className={styles.cube1}>
          <img src={introCube1}/>
      </div>
      <div className={styles.pillar}>
          <img src={introPillar1}/>
      </div>
      <div className={styles.stairs}>
          <img src={introStairs1}/>
      </div>
      <div className={styles.cash}>
          <span>CASH</span>
      </div>
      <div className={styles.phone}>
          <img src={introPhone1}/>
      </div>
      <div className={styles.app}>
          <span>APP</span>
      </div>
      <div className={styles.header}>
          <NavBar/>
      </div>
      <div className={styles.footer}>
          <Footer/>
      </div>
  </div>
);

export default HeroSection;
