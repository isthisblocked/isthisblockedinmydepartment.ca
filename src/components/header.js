import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.headerContainer}>
    <div className={styles.container}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

export default Header
