import React from 'react'
// import { Link } from 'gatsby'
import _ from 'lodash'
import HomepageRow from '../components/HomepageRow'
import HomepageRowCollection from '../components/HomepageRowCollection'
import SortLinkCollection from '../components/SortLinkCollection'
import IntroText from '../components/IntroText'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'
// import styles from '../styles/isthisblocked.scss'
// import styles from '../styles/sass.module.scss'

class IndexPage extends React.Component {
  state = {
    descriptionVisible: false,
    sortBy: 'score',
    sortDirection: 'desc',
    sortLinksActiveLabel: 'highest',
    homepageRows: {},
    sortedHomepageRows: [],
    showPrelaunchPlaceholder: true,
  }

  // On component load, merge data from two of the GraphQL CSV queries, and use it to set the initial state
  componentDidMount() {
    let sortedHomepageRows = []
    let homepageRows = {}
    let localState = {}
    let sortLinksActiveLabel
    let descriptionVisible

    // Get initial sort state from local storage
    const localStorageRef = localStorage.getItem('localState')
    if (localStorageRef) {
      localState = JSON.parse(localStorageRef)
    }
    // If these are set in the local storage object, use those values - otherwise use the defaults in the state object above:
    sortLinksActiveLabel = _.get(
      localState,
      'sortLinksActiveLabel',
      this.state.sortLinksActiveLabel
    )
    descriptionVisible = _.get(
      localState,
      'descriptionVisible',
      this.state.descriptionVisible
    )

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
      if (_.isObject(homepageRows[edge.node.acronym_en])) {
        homepageRows[edge.node.acronym_en].name_en = edge.node.name_en
      }
    })

    this.setState(
      {
        homepageRows: homepageRows,
        sortLinksActiveLabel: sortLinksActiveLabel,
        descriptionVisible: descriptionVisible,
      },
      () => {
        this.sortRowsByTargetLabel(sortLinksActiveLabel)
      }
    )
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

  // Helper function to update the sortedHomepageRows array based on input parameters
  // The this.state.homepageRows object does not change after the component is loaded, just the this.state.sortedHomepageRows array.
  sortRows = (sortBy, sortDirection) => {
    const sortedHomepageRows = this.sortRowArray(
      this.state.homepageRows,
      sortBy,
      sortDirection
    )
    this.setState(
      {
        sortedHomepageRows: sortedHomepageRows,
        sortBy: sortBy,
        sortDirection: sortDirection,
      },
      () => {
        this.updateLocalStorage()
      }
    )
  }

  updateLocalStorage = () => {
    // Update local storage
    localStorage.setItem(
      'localState',
      JSON.stringify({
        sortLinksActiveLabel: this.state.sortLinksActiveLabel,
        descriptionVisible: this.state.descriptionVisible,
      })
    )
  }

  sortRowsByTargetLabel = targetLabel => {
    if (targetLabel === 'highest') {
      this.sortRows('score', 'desc')
    } else if (targetLabel === 'lowest') {
      this.sortRows('score', 'asc')
    } else if (targetLabel === 'name') {
      this.sortRows('name', 'asc')
    } else if (targetLabel === 'date_updated') {
      this.sortRows('date_updated', 'desc')
    }
  }

  // Handles click events from the sorting links
  handleSortLink = event => {
    event.preventDefault()
    let targetLabel = event.currentTarget.dataset.label

    this.setState({ sortLinksActiveLabel: targetLabel })

    this.sortRowsByTargetLabel(targetLabel)
  }

  toggleDescription = event => {
    event.preventDefault()
    let newDescription

    if (this.state.descriptionVisible) {
      newDescription = false
    } else {
      newDescription = true
    }

    // Update localStorage while we're at it:
    this.setState(
      {
        descriptionVisible: newDescription,
      },
      () => {
        this.updateLocalStorage()
      }
    )
  }

  render() {
    return (
      <Layout>
        <IntroText
          descriptionVisible={this.state.descriptionVisible}
          toggleDescription={this.toggleDescription}
        />

        {this.state.showPrelaunchPlaceholder && (
          <>
            <h1>Launching soon</h1>
            <p>Stay tuned for updates in the next few weeks…</p>
          </>
        )}

        {this.state.showPrelaunchPlaceholder === false && (
          <>
            <h1 className={styles.comparisonTitle}>Departmental comparison</h1>

            <SortLinkCollection
              sortBy={this.state.sortBy}
              sortDirection={this.state.sortDirection}
              sortLinksActiveLabel={this.state.sortLinksActiveLabel}
              handleSortLink={this.handleSortLink}
            />

            <HomepageRowCollection
              sortedHomepageRows={this.state.sortedHomepageRows}
            />
          </>
        )}
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
