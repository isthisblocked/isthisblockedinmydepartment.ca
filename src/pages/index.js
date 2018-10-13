import React from 'react'
// import { Link } from 'gatsby'
import _ from 'lodash'
import HomepageRow from '../components/HomepageRow'
import HomepageRowCollection from '../components/HomepageRowCollection'
import SortLinks from '../components/SortLinks'
import IntroText from '../components/IntroText'

import Layout from '../components/layout'
// import styles from '../styles/isthisblocked.scss'
// import styles from '../styles/sass.module.scss'

class IndexPage extends React.Component {
  state = {
    descriptionVisible: false,
    sortBy: 'score',
    sortDirection: 'desc',
    homepageRows: {},
    sortedHomepageRows: [],
  }

  homepageRows = {}

  componentDidMount() {
    let sortedHomepageRows = []
    let homepageRows = {}

    // console.log(this.props.data.allOrganizationStatusRandomCsv.edges)

    // Create indexed object for each organization in the status table
    _.each(this.props.data.allOrganizationStatusRandomCsv.edges, function(
      edge
    ) {
      // Set the score value for the row to be an integer, not a string
      if (_.isUndefined(edge.node.score) === false) {
        edge.node.score = _.toInteger(edge.node.score)
      }
      homepageRows[edge.node.organization] = edge.node
    })

    // Bring in the organization name from the organizations CSV table, matched with the index key (organization acronym)
    _.each(this.props.data.allOrganizationsCsv.edges, function(edge) {
      // console.log(edge.node)
      if (_.isObject(homepageRows[edge.node.acronym_en])) {
        homepageRows[edge.node.acronym_en].name_en = edge.node.name_en
      }
    })

    // sortedHomepageRows = _.sortBy(_.values(homepageRows), [
    //   function(o) {
    //     return o.score
    //   },
    // ])

    sortedHomepageRows = this.sortRowArray(
      homepageRows,
      this.state.sortBy,
      this.state.sortDirection
    )

    this.setState({
      homepageRows: homepageRows,
      sortedHomepageRows: sortedHomepageRows,
    })

    // console.log(homepageRows)
    // console.log('sorted')
    // console.log(sortedHomepageRows)
  }

  sortRowArray = (homepageRows, sortBy, sortDirection) => {
    let sortedHomepageRows = []

    sortedHomepageRows = _.sortBy(_.values(homepageRows), [
      function(o) {
        return o[sortBy]
      },
    ])

    if (sortDirection === 'desc') {
      _.reverse(sortedHomepageRows)
    }

    return sortedHomepageRows
  }

  sortRows = (sortBy, sortDirection) => {
    const sortedHomepageRows = this.sortRowArray(
      this.state.homepageRows,
      sortBy,
      sortDirection
    )
    this.setState({
      sortedHomepageRows: sortedHomepageRows,
      sortBy: sortBy,
      sortDirection: sortDirection,
    })
  }

  toggleDescription = event => {
    event.preventDefault()
    if (this.state.descriptionVisible) {
      this.setState({
        descriptionVisible: false,
      })
    } else {
      this.setState({
        descriptionVisible: true,
      })
    }
  }

  render() {
    return (
      <Layout>
        <IntroText
          descriptionVisible={this.state.descriptionVisible}
          toggleDescription={this.toggleDescription}
        />

        <h1>Departmental comparison</h1>

        <SortLinks
          sortBy={this.state.sortBy}
          sortDirection={this.state.sortDirection}
          sortRows={this.sortRows}
        />

        <HomepageRowCollection
          sortedHomepageRows={this.state.sortedHomepageRows}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const IndexPageQuery = graphql`
  query {
    allOrganizationsCsv {
      edges {
        node {
          id
          name_en
          acronym_en
          url_en
          name_fr
          acronym_fr
          url_fr
          date_added
        }
      }
    }
    allOrganizationStatusRandomCsv {
      edges {
        node {
          id
          organization
          score
          date_updated
        }
      }
    }
  }
`
