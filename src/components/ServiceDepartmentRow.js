import React from 'react'
import { Link } from 'gatsby'

class ServiceDepartmentRow extends React.Component {
  render() {
    const { name_en, acronym_en, url_en, id } = this.props.organization

    return (
      <div className="serviceDepartmentRow">
        <Link to={this.props.url}>{name_en}a</Link> is {this.props.status} as of{' '}
        {this.props.dateUpdated}
      </div>
    )
  }
}

export default ServiceDepartmentRow
