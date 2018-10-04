import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

class HomepageRow extends React.Component {
  render() {
    return (
      <div className={styles.homepageRow}>
        <div className="departmentName">
          <Link to={this.props.url}>{this.props.organizationName}</Link>
        </div>
        <div className="departmentScore">
          Score: <span class="departmentScoreNumber">{this.props.score} </span>
        </div>
        <div className="departmentDateUpdated">{this.props.dateUpdated}</div>
      </div>
    )
  }
}

export default HomepageRow
