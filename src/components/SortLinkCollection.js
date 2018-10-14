import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import SortLink from '../components/SortLink'
import styles from '../styles/sass.module.scss'

class SortLinkCollection extends React.Component {
  render() {
    const sortLinks = [
      {
        label: 'highest',
        description: 'Highest to lowest',
      },
      {
        label: 'lowest',
        description: 'Lowest to highest',
      },
      {
        label: 'name',
        description: 'Sort by name',
      },
      {
        label: 'date_updated',
        description: 'Sort by date updated',
      },
    ]
    return (
      <ul className={cx(styles.listInline, styles.sortLinks)}>
        {sortLinks.map((row, i) => (
          <SortLink
            handleSortLink={this.props.handleSortLink}
            label={row.label}
            key={row.label}
            activeLabel={this.props.sortLinksActiveLabel}
            description={row.description}
          />
        ))}
      </ul>
    )
  }
}

export default SortLinkCollection
