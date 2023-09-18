import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {eyeButton, logo} from "assets/images";

interface NavBarProps {}

const NavBar = () => {

    const menuItems:string[] = [ "SIGN IN","LEGAL","LICENSES","SECURITY","CAREERS","PRESS","SUPPORT","STATUS","CODEBLOG"]
  return (
      <div className={styles.NavBar}>
          <div className={styles.logo}>
              <img src={logo}/>
          </div>
          <div className={styles.menuItems}>
              {
                  menuItems.map((item)=>{
                      return (
                          <span>{item}</span>
                      )
                  })
              }
          </div>
          <div className={styles.eyeButton}>
              <img src={eyeButton}/>
          </div>
      </div>
  )
}

export default NavBar;
