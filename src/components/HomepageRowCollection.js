import React from 'react'
// import { Link } from 'gatsby'
import HomepageRow from '../components/HomepageRow'
// import cx from 'classnames'
// import styles from '../styles/sass.module.scss'

class HomepageRowCollection extends React.Component {
  render() {
    return (
      <>
        {this.props.sortedHomepageRows.map((row, i) => (
          <HomepageRow
            key={row.id}
            url={`/organization/${row.organization}/`}
            organizationName={row.name_en}
            score={row.score}
            dateUpdated={row.date_updated}
            totalServices={this.props.totalServices}
          />
        ))}
      </>
    )
  }
}

export default HomepageRowCollection
