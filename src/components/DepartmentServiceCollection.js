import React from 'react'
import _ from 'lodash'
// import { Link } from 'gatsby'
// import cx from 'classnames'
// import styles from '../styles/sass.module.scss'
import DepartmentServiceRow from './DepartmentServiceRow'

class DepartmentServiceCollection extends React.Component {
  render() {
    return (
      <div className="departmentalServiceCollection">
        <h2>{this.props.description}</h2>
        {this.props.services.map((item, i) => (
          <div key={item}>
            {_.get(this.props.getServiceDetails(item), 'category') ===
              this.props.filter && (
              <DepartmentServiceRow
                url={`/service/${item}/`}
                serviceDetails={this.props.getServiceDetails(item)}
                status={this.props.getServiceStatus(item)}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default DepartmentServiceCollection
