import React, { FC } from 'react';
import styles from './payments-section.module.scss';
import {
    paymentsFloor1,
    paymentsPhone1,
    paymentsColumn,
    paymentPillarLarge,
    paymentPillarSmall, paymentPillarMedium
} from "../../assets/images";
import PaymentsPillars from "../../components/payments-pillars/payments-pillars";

interface PaymentsSectionProps {}

const PaymentsSection= () => {
  return (
      <div className={styles.PaymentsSection}>
          <div className={styles.paymentsLine}>
              <img src={paymentsFloor1}/>
          </div>
          <div className={styles.rightCol}>
              <img src={paymentsColumn}/>
          </div>
          <div className={styles.leftCol}>
              <img src={paymentsColumn}/>
          </div>
          <div className={styles.pillarLarge}>
              <img src={paymentPillarLarge}/>
          </div>
          <div className={styles.phone}>
              <img src={paymentsPhone1}/>
          </div>
          <div className={styles.pillarSmall}>
              <img src={paymentPillarSmall}/>
          </div>
          <div className={styles.pillarMedium1}>
              <img src={paymentPillarMedium}/>
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
          <div className={styles.text}>
              <span className={styles.payment}>
                  Payments
              </span>
              <span className={styles.description}>
                  Send and receive money with anyone, donate  to an important cause, or tip professionals.
Just enter a $cashtag, phone number, or
scan their  QR code to pay.
              </span>
          </div>
      </div>
  )
};

export default PaymentsSection;
