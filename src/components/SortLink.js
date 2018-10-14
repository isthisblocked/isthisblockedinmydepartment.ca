import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class SortLink extends React.Component {
  render() {
    console.log('herrrre')
    console.log(this.props.label)
    console.log(this.props.activeLabel)

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
