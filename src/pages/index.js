import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import HomepageRow from '../components/HomepageRow'

import Layout from '../components/layout'

class IndexPage extends React.Component {
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
        <h1>All Departments</h1>
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
