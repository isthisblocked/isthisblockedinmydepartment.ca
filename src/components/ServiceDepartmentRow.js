import React from 'react'
import { Link } from 'gatsby'

class ServiceDepartmentRow extends React.Component {
  render() {
    return (
      <div className="serviceDepartmentRow">
        <Link to={this.props.url}>{this.props.organization_name}</Link> is{' '}
        {this.props.status} as of {this.props.dateUpdated}
      </div>
    )
  }
}

export default ServiceDepartmentRow
