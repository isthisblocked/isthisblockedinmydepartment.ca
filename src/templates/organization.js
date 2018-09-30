import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'
import DepartmentServiceRow from '../components/DepartmentServiceRow'

class Organization extends React.Component {
  getServiceDetails = (short_name, field) => {
    const nodes = _.map(this.props.data.allServicesCsv.edges, 'node')
    if (_.isUndefined(field)) {
      return _.find(nodes, { short_name: short_name })
    } else {
      return _.get(_.find(nodes, { short_name: short_name }), field)
    }
  }

  render() {
    const services = Object.keys(this.props.data.organizationStatusRandomCsv)
    const organization = this.props.data.organizationsCsv

    // Remove the "score" and "date_updated" entries from the list of services:
    delete services[0]
    delete services[1]

    console.log('department!')
    console.log(services)

    console.log('services!')
    console.log(this.props.data.allServicesCsv)

    return (
      <Layout pageTitle={organization.name_en}>
        <div>
          <h1>{organization.name_en}</h1>
          <p>
            <a href={organization.url_en}>Visit website</a>
          </p>
          <p>Score: {this.props.data.organizationStatusRandomCsv.score}</p>
          <p>
            Last updated:{' '}
            {this.props.data.organizationStatusRandomCsv.date_updated}
          </p>

          {services.map((item, i) => (
            <DepartmentServiceRow
              key={item}
              url={`/service/${item}/`}
              serviceDetails={this.getServiceDetails(item)}
              status={this.props.data.organizationStatusRandomCsv[item]}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Organization

// TODO - In the future, the source CSV should be
// restructured to avoid having to add new
// service fields into the fragment below.
export const organizationQuery = graphql`
  query($acronym: String!) {
    organizationsCsv(acronym_en: { eq: $acronym }) {
      id
      name_en
      acronym_en
      url_en
      name_fr
      acronym_fr
      url_fr
      date_added
    }
    allServicesCsv {
      edges {
        node {
          name
          category
          short_name
          url
          date_added
          user_submitted
          description
        }
      }
    }
    organizationStatusRandomCsv(organization: { eq: $acronym }) {
      score
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
