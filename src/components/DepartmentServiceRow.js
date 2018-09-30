import React from 'react'
import { Link } from 'gatsby'

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
    const { name, description } = this.props.serviceDetails
    return (
      <div className="departmentServiceRow">
        <Link to={this.props.url} title={description}>
          {name}
        </Link>{' '}
        is {this.props.status}
      </div>
    )
  }
}

export default DepartmentServiceRow
