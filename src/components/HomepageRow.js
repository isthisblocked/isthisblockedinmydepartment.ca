import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class HomepageRow extends React.Component {
  render() {
    return (
      <div className={cx(styles.homepageRow, styles.clearfix)}>
        <div className={styles.departmentName}>
          <Link to={this.props.url}>{this.props.organizationName}</Link>
        </div>
        <div className={styles.departmentScore}>
          Score:{' '}
          <span className={styles.departmentScoreNumber}>
            {this.props.score}{' '}
          </span>
        </div>
        <div className={styles.departmentDateUpdated}>
          Updated:{' '}
          <span className={styles.departmentDateUpdatedValue}>
            {this.props.dateUpdated}
          </span>
        </div>
      </div>
    )
  }
}

export default HomepageRow
