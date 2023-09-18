import React, { FC } from 'react';
import styles from './footer.module.scss';
import AppCard from "../app-card/app-card";
import {arrow, insta, twitch, twitter} from "../../assets/images";

interface FooterProps {}

const Footer = () => {
  return (
      <div>
      <div className={styles.hiddenText}>
          <span>
                  Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
          </span>
      </div>
      <div className={styles.Footer}>
          <div className={styles.right}>
              <AppCard isApple={false}/>
              <AppCard isApple={true}/>
          </div>
          <div className={styles.arrow}>
              <img src={arrow}/>
          </div>
          <div className={styles.left}>
              <span className={styles.text}>
                  Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
              </span>
              <div className={styles.socialMedia}>
                  <img src={twitch}/>
                  <img src={twitter}/>
                  <img src={insta}/>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Footer;
