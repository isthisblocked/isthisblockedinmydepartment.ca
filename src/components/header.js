import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.headerContainer}>
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <Link to="/">{siteTitle}</Link>
      </div>
    </div>
  </div>
)

export default Header
