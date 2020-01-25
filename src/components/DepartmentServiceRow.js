import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class DepartmentServiceRow extends React.Component {
  // Thanks to
  // https://stackoverflow.com/a/48388363
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

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
        <div className={styles.serviceStatus}>
          {this.Capitalize(this.props.status)}
        </div>
      </div>
    )
  }
}

export default DepartmentServiceRow
