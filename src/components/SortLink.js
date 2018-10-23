import React from 'react'
// import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class SortLink extends React.Component {
  render() {
    if (this.props.label === this.props.activeLabel) {
      return (
        <li className={cx(styles.listInlineItem, styles.activeSortLink)}>
          <a
            href="#"
            onClick={this.props.handleSortLink}
            data-label={this.props.label}
          >
            {this.props.description}
          </a>
        </li>
      )
    } else {
      return (
        <li className={styles.listInlineItem}>
          <a
            href="#"
            onClick={this.props.handleSortLink}
            data-label={this.props.label}
          >
            {this.props.description}
          </a>
        </li>
      )
    }
  }
}

export default SortLink
