import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import _ from 'lodash'
import styles from '../styles/sass.module.scss'
import ServiceDepartmentRow from '../components/ServiceDepartmentRow'

class Service extends React.Component {
  getOrganizationDetails = (acronym_en, field) => {
    const nodes = _.map(this.props.data.allOrganizationsCsv.edges, 'node')
    if (_.isUndefined(field)) {
      return _.find(nodes, { acronym_en: acronym_en })
    } else {
      return _.get(_.find(nodes, { acronym_en: acronym_en }), field)
    }
  }

  render() {
    console.log('service!')
    console.log(this.props.data)
    return (
      <Layout pageTitle={this.props.data.servicesCsv.name}>
        <div>
          <h1>{this.props.data.servicesCsv.name}</h1>
          <p className={styles.textLimit}>
            {this.props.data.servicesCsv.description}{' '}
            <a
              href={this.props.data.servicesCsv.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </p>

          <h2>Department status</h2>
          {this.props.data.allOrganizationStatusCsv.edges.map((row, i) => (
            <ServiceDepartmentRow
              key={row.node.id}
              url={`/organization/${row.node.organization}/`}
              organization_name={this.getOrganizationDetails(
                row.node.organization,
                'name_en'
              )}
              status={row.node[this.props.data.servicesCsv.short_name]}
              dateUpdated={row.node.date_updated}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Service

// TODO - In the future, the source CSV should be
// restructured to avoid having to add new
// service fields into the fragment below.
export const servicesQuery = graphql`
  query($short_name: String!) {
    servicesCsv(short_name: { eq: $short_name }) {
      id
      name
      short_name
      category
      url
      description
      date_added
    }
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
    allOrganizationStatusCsv {
      edges {
        ...ServicesStatusFragment
      }
    }
  }

  fragment ServicesStatusFragment on OrganizationStatusCsvEdge {
    node {
      id
      organization
      date_updated
      airtable
      appearin
      asana
      basecamp
      circleci
      doodle
      dropbox
      evernote
      facebook
      fluidsurveys
      gist
      github
      googlechrome
      googledocs
      googlehangouts
      hootsuite
      mozillafirefox
      prezi
      quip
      reddit
      skype
      slack
      slideshare
      surveymonkey
      trello
      twitter
      webex
      youtube
      zotero
    }
  }
`
