import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <nav >
        <h1 className={styles.header}>Sheriyans</h1>
        <button className={styles.btn}>login</button>
      </nav>
    </div>
  )
}

export default Header
