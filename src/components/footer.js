import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.container}>
      <ul className={styles.listInline}>
        <li className={styles.listInlineItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.listInlineItem}>
          <Link to="/organization">Departments</Link>
        </li>
        <li className={styles.listInlineItem}>
          <Link to="/service">Services</Link>
        </li>
      </ul>
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
        <li className={styles.listInlineItem}>
          <a
            href="https://github.com/isthisblocked/isthisblockedinmydepartment.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
      </ul>
      <ul className={styles.listInline}>
        <li className={styles.listInlineItem}>
          <a
            href="https://shoulditbeblockedinmydepartment.ca/"
            target="_blank"
            rel="noopener"
          >
            Should it be blocked in my department?
          </a>
        </li>
        <li className={styles.listInlineItem}>
          <a
            href="https://sboots.ca/2022/01/01/is-this-blocked-in-my-department-2021-year-in-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 Recap
          </a>
        </li>
        <li className={styles.listInlineItem}>
          <a
            href="https://sboots.ca/2021/01/04/is-this-blocked-in-my-department-a-year-in-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Recap
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
