import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from '../styles/sass.module.scss'

class DepartmentServiceRow extends React.Component {
  //   <p key={item}>
  //   <Link
  //     to={`/service/${item}/`}
  //     title={this.getServiceDetails(item, 'description')}
  //   >
  //     {this.getServiceDetails(item, 'name')}
  //   </Link>{' '}
  //   - {this.props.data.organizationStatusRandomCsv[item]}
  // </p>

  render() {
    // console.log('row')
    // console.log(this.props.serviceDetails)
    const { name, description } = this.props.serviceDetails
    return (
      <div className={cx(styles.departmentServiceRow, styles.clearfix)}>
        <div className={styles.serviceName}>
          <Link to={this.props.url} title={description}>
            {name}
          </Link>
        </div>
        <div className={styles.serviceStatus}>{this.props.status}</div>
      </div>
    )
  }
}

export default DepartmentServiceRow
