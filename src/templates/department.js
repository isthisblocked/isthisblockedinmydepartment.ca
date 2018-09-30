import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'

class Department extends React.Component {
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

    // Remove the "score" entry from the list of services:
    delete services[0]

    console.log('department!')
    console.log(services)

    console.log('services!')
    console.log(this.props.data.allServicesCsv)

    return (
      <Layout>
        <div>
          <h1>{organization.name_en}</h1>
          <p>
            <a href={organization.url_en}>Visit website</a>
          </p>
          <p>Score: {this.props.data.organizationStatusRandomCsv.score}</p>

          {services.map((item, i) => (
            <p key={item}>
              <Link
                to={`/services/${item}/`}
                title={this.getServiceDetails(item, 'description')}
              >
                {this.getServiceDetails(item, 'name')}
              </Link>{' '}
              - {this.props.data.organizationStatusRandomCsv[item]}
            </p>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Department

// TODO - In the future, the source CSV should be
// restructured to avoid having to add new
// service fields into the fragment below.
export const departmentQuery = graphql`
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
