import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.container}>
      <ul className={styles.listInline}>
        <li className={styles.listInlineItem}>
          <Link to="/suggest">Suggest an update</Link>
        </li>
        <li className={styles.listInlineItem}>
          <Link to="/scoring">Scoring</Link>
        </li>
        <li className={styles.listInlineItem}>
          <Link to="/about">About this project</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
