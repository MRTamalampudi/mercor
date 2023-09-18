import React, { FC } from 'react';
import styles from './card.module.scss';
import {cardPhone, cardStairs1, cardStairs2} from "../../assets/images";

interface CardProps {}

const Card = () => {
  return (
      <div className={styles.Card}>
          <div className={styles.stairs1}>
              <img src={cardStairs1}/>
          </div>
          <div className={styles.phone}>
              <img src={cardPhone}/>
          </div>
          <div className={styles.title}>
                  Cash Card & Boost
          </div>
          <div className={styles.description}>
                  The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
          </div>
          <div className={styles.stairs2}>
              <img src={cardStairs2}/>
          </div>
      </div>
  )
}

export default Card;
