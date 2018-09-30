import React from 'react'
import { Link } from 'gatsby'

class HomepageRow extends React.Component {
  render() {
    return (
      <div className="homepageRow">
        <Link to={this.props.url}>{this.props.organizationName}</Link> is{' '}
        {this.props.score} as of {this.props.dateUpdated}
      </div>
    )
  }
}

export default HomepageRow
