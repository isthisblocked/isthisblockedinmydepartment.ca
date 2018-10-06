import React from 'react'
// import { Link } from 'gatsby'
import _ from 'lodash'
import HomepageRow from '../components/HomepageRow'
import IntroText from '../components/IntroText'

import Layout from '../components/layout'
// import styles from '../styles/isthisblocked.scss'
// import styles from '../styles/sass.module.scss'

class IndexPage extends React.Component {
  state = {
    descriptionVisible: false,
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

  getOrganizationStatus = (acronym_en, field) => {
    const nodes = _.map(
      this.props.data.allOrganizationStatusRandomCsv.edges,
      'node'
    )
    if (_.isUndefined(field)) {
      return _.find(nodes, { organization: acronym_en })
    } else {
      return _.get(_.find(nodes, { organization: acronym_en }), field)
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
        {this.props.data.allOrganizationsCsv.edges.map((row, i) => (
          <HomepageRow
            key={row.node.id}
            url={`/organization/${row.node.acronym_en}/`}
            organizationName={row.node.name_en}
            score={`${this.getOrganizationStatus(
              row.node.acronym_en,
              'score'
            )}`}
            dateUpdated={`${this.getOrganizationStatus(
              row.node.acronym_en,
              'date_updated'
            )}`}
          />
        ))}
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
