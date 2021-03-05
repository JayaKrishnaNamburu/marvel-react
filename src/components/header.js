import React from 'react'

import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        alt="Marvel Logo"
        src="https://react-marvel-poc.fidisys.com/static/media/logo.8d0e4f59.svg"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container1}>
        <span>Home</span>
        <span>Comics</span>
        <span>Characters</span>
        <span>SERIES</span>
      </div>
    </div>
  )
}

export default Header
