import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class ServiceDepartmentRow extends React.Component {
  render() {
    return (
      <div className={cx(styles.serviceDepartmentRow, styles.clearfix)}>
        <div className={styles.departmentName}>
          <Link to={this.props.url}>{this.props.organization_name}</Link>
        </div>
        <div className={styles.serviceStatusIndicator}>
          <span className={styles[this.props.status]}>&nbsp;</span>
        </div>
        <div className={styles.serviceStatus}>{this.props.status}</div>
        {this.props.status !== 'unknown' && (
          <div className={styles.departmentDateUpdated}>
            Updated: {this.props.dateUpdated}
          </div>
        )}
      </div>
    )
  }
}

export default ServiceDepartmentRow
