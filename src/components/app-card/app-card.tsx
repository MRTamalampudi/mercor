import React, { FC } from 'react';
import styles from './app-card.module.scss';
import {android, apple} from "../../assets/images";

interface AppCardProps {
    isApple:boolean
}

const AppCard = ({isApple}:AppCardProps) => {
  return (
      <div className={styles.AppCard}>
          <img src={isApple ? apple : android}/>
          <span>{isApple ? "APP STORE" : "GOOGLE PLAY"}</span>
      </div>
  )
}

export default AppCard;
