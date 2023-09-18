import React, { FC } from 'react';
import styles from './payments-pillars.module.scss';
import {
    paymentPillarLarge,
    paymentPillarMedium,
    paymentPillarSmall,
    paymentsColumn,
    paymentsPhone1
} from "../../assets/images";

interface PaymentsPillarsProps {}

const PaymentsPillars = () => {
  return (
      <div className={styles.PaymentsPillars}>
          <div className={styles.rightCol}>
              <img src={paymentsColumn}/>
          </div>
          <div className={styles.leftCol}>
              <img src={paymentsColumn}/>
          </div>
          <div className={styles.pillarLarge}>
              <img src={paymentPillarLarge}/>
          </div>
          <div className={styles.pillarSmall}>
              <img src={paymentPillarSmall}/>
          </div>
          <div className={styles.pillarMedium1}>
              <img src={paymentPillarMedium}/>
          </div>
          <div className={styles.paymentsPhone}>
              <img src={paymentsPhone1}/>
          </div>
          <div className={styles.pillarMedium2}>
              <img src={paymentPillarMedium}/>
          </div>
          <div className={styles.pillarMedium3}>
              <img src={paymentPillarMedium}/>
          </div>
          <div className={styles.pillarMedium4}>
              <img src={paymentPillarMedium}/>
          </div>
          <div className={styles.middleCol}>
              <img src={paymentsColumn}/>
          </div>
      </div>
  )
}

export default PaymentsPillars;
