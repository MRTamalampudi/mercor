import React, { FC } from 'react';
import styles from './investing.module.scss';
import {bgLines, investingBitcoin, investingFloor, investingStocks} from "../../assets/images";

interface InvestingProps {}

const Investing = () => {
  return (
      <div className={styles.Investing}>
          <div className={styles.bg}>
              <img src={bgLines}/>
          </div>
          <div className={styles.floor}>
              <img src={investingFloor}/>
          </div>
          <div className={styles.stocks}>
              <img src={investingStocks}/>
              <div className={styles.text}>
                  <span className={styles.title}>
                      Stocks
                  </span>
                  <span className={styles.description}>
                      Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
                  </span>
              </div>
          </div>
          <div className={styles.bitcoin}>
              <div className={styles.text}>
                  <span className={styles.title}>
                      Bitcoin
                  </span>
                  <span className={styles.description}>
                      Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.
                  </span>
              </div>
              <img src={investingBitcoin}/>
          </div>
          <div className={styles.investing}>
              Investing
          </div>
      </div>
  )
}

export default Investing;
