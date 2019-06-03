import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import _ from 'lodash'
import styles from '../styles/sass.module.scss'
import ServiceDepartmentRow from '../components/ServiceDepartmentRow'

class Service extends React.Component {
  state = {
    totalOpen: 0,
    totalRestricted: 0,
    totalBlocked: 0,
    totalKnown: 0,
  }

  // On load, tally up the numbers and store those in the state values
  componentDidMount() {
    let totalOpen = 0
    let totalRestricted = 0
    let totalBlocked = 0
    let totalKnown = 0
    let shortName = this.props.data.servicesCsv.short_name
    _.each(this.props.data.allOrganizationStatusCsv.edges, function(edge) {
      let status = edge.node[shortName]

      if (status === 'open') {
        totalOpen += 1
      } else if (status === 'restricted') {
        totalRestricted += 1
      } else if (status === 'blocked') {
        totalBlocked += 1
      }
      if (status !== 'unknown') {
        totalKnown += 1
      }
    })

    // console.log('t ' + totalKnown)

    this.setState({
      totalOpen: totalOpen,
      totalRestricted: totalRestricted,
      totalBlocked: totalBlocked,
      totalKnown: totalKnown,
    })
  }

  getOrganizationDetails = (acronym_en, field) => {
    const nodes = _.map(this.props.data.allOrganizationsCsv.edges, 'node')
    if (_.isUndefined(field)) {
      return _.find(nodes, { acronym_en: acronym_en })
    } else {
      return _.get(_.find(nodes, { acronym_en: acronym_en }), field)
    }
  }

  render() {
    // console.log('service!')
    // console.log(this.props.data)
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

          <h2>Is {this.props.data.servicesCsv.name} blocked?</h2>
          <p className={styles.textLimit}>
            The list below shows which Canadian federal departments and agencies
            allow, restrict, or block access to{' '}
            {this.props.data.servicesCsv.name}.
          </p>
          {_.toInteger(this.state.totalKnown) > 5 && (
            <p className={styles.textLimit}>
              Based on <Link to="/suggest">crowd-sourced data</Link>,{' '}
              <b>{this.state.totalOpen}</b> departments allow access to{' '}
              {this.props.data.servicesCsv.name} by default;{' '}
              <b>{this.state.totalRestricted}</b> departments restrict it to
              certain users; and <b>{this.state.totalBlocked}</b> departments
              block it completely. <Link to="/service">See other services</Link>
            </p>
          )}
          {_.toInteger(this.state.totalKnown) < 5 && (
            <p className={styles.textLimit}>
              <b>Not much data is available for this service yet.</b> You can
              help improve it by{' '}
              <Link to="/suggest">adding your suggestions!</Link>
            </p>
          )}
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
      linkedin
      mozillafirefox
      prezi
      python
      quip
      rstudio
      reddit
      skype
      slack
      slideshare
      surveymonkey
      tableau
      trello
      twitter
      webex
      yammer
      youtube
      zoom
      zotero
    }
  }
`
