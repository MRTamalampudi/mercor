import React, { FC } from 'react';
import styles from './banking.module.scss';
import {
    bankingColumn,
    bankingCubes, bankingHole, bankingMonster,
    bankingPhone, bankingRamp1, bankingRamp2,
    bankingStairs1, bankingStairs2,
    bankingTrack1,
    bankingTrack2,
    bankingTube
} from "../../assets/images";

interface BankingProps {}

const Banking = () => {
  return (
      <div className={styles.Banking}>
          <div className={styles.stairs1}>
              <img src={bankingStairs1}/>
          </div>
          <div className={styles.cubes}>
              <img src={bankingCubes}/>
          </div>
          <div className={styles.track2}>
              <img src={bankingTrack2}/>
          </div>
          <div className={styles.track1}>
              <img src={bankingTrack1}/>
          </div>
          <div className={styles.phone}>
              <img src={bankingPhone}/>
          </div>
          <div className={styles.tube}>
              <img src={bankingTube}/>
          </div>
          <div className={styles.text}>
              <span className={styles.title}>
                  Banking
              </span>
              <span className={styles.description}>
                  Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing and account number.
              </span>
          </div>
          <div className={styles.stairs2}>
              <img src={bankingStairs2}/>
          </div>
          <div className={styles.monster}>
              <img src={bankingMonster}/>
          </div>
          <div className={styles.hole}>
              <img src={bankingHole}/>
          </div>
          <div className={styles.hole2}>
              <img src={bankingHole}/>
          </div>
          <div className={styles.ramp1}>
              <img src={bankingRamp1}/>
          </div>
          <div className={styles.col}>
              <img src={bankingColumn}/>
          </div>
          <div className={styles.ramp2}>
              <img src={bankingRamp2}/>
          </div>
      </div>
  )
};

export default Banking;
