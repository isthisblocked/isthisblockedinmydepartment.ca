import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class SortLinks extends React.Component {
  render() {
    return (
      <ul className={styles.listInline}>
        <li className={styles.listInlineItem}>Highest to lowest</li>
        <li className={styles.listInlineItem}>Lowest to highest</li>
        <li className={styles.listInlineItem}>Name</li>
        <li className={styles.listInlineItem}>Date updated</li>
      </ul>
    )
  }
}

export default SortLinks
