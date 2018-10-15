import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class DepartmentServiceRow extends React.Component {
  render() {
    const { name, description } = this.props.serviceDetails
    return (
      <div className={cx(styles.departmentServiceRow, styles.clearfix)}>
        <div className={styles.serviceName}>
          <Link to={this.props.url} title={description}>
            {name}
          </Link>
        </div>
        <div className={styles.serviceStatusIndicator}>
          <span className={styles[this.props.status]}>&nbsp;</span>
        </div>
        <div className={styles.serviceStatus}>{this.props.status}</div>
      </div>
    )
  }
}

export default DepartmentServiceRow
