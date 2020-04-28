import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import _ from 'lodash'
import styles from '../styles/sass.module.scss'
import DepartmentServiceCollection from '../components/DepartmentServiceCollection'

class Organization extends React.Component {
  getServiceDetails = (short_name, field) => {
    const nodes = _.map(this.props.data.allServicesCsv.edges, 'node')
    if (_.isUndefined(field)) {
      return _.find(nodes, { short_name: short_name })
    } else {
      return _.get(_.find(nodes, { short_name: short_name }), field)
    }
  }
  getServiceStatus = item => {
    return this.props.data.organizationStatusCsv[item]
  }

  render() {
    const services = Object.keys(this.props.data.organizationStatusCsv)
    const organization = this.props.data.organizationsCsv

    // Remove the "score" and "date_updated" entries from the list of services:
    delete services[0]
    delete services[1]

    // console.log('department!')
    // console.log(services)

    // console.log('services!')
    // console.log(this.props.data.allServicesCsv)

    return (
      <Layout pageTitle={organization.name_en}>
        <div>
          <h1>{organization.name_en}</h1>
          <ul className={styles.listInline}>
            <li className={styles.listInlineItem}>
              <a
                href={organization.url_en}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </li>
            {this.props.data.organizationStatusCsv.score === '0' && (
              <li className={styles.listInlineItem}>
                <em>No data yet</em>
              </li>
            )}
            {this.props.data.organizationStatusCsv.score !== '0' && (
              <>
                <li className={styles.listInlineItem}>
                  Score:{' '}
                  <span className={styles.departmentScoreNumber}>
                    {this.props.data.organizationStatusCsv.score}
                  </span>{' '}
                  (
                  {Math.round(
                    (_.toInteger(this.props.data.organizationStatusCsv.score) /
                      (this.props.data.allServicesCsv.totalCount * 3)) *
                      100
                  )}
                  %)
                </li>
                <li className={styles.listInlineItem}>
                  Last updated:{' '}
                  {this.props.data.organizationStatusCsv.date_updated}
                </li>
              </>
            )}
          </ul>

          <p className={styles.textLimit}>
            The list below shows which online services are open by default,
            restricted (or available on request), or blocked at{' '}
            {organization.name_en}.
          </p>

          {this.props.data.organizationStatusCsv.score === '0' && (
            <p className={styles.textLimit}>
              <b>Improve this data!</b> Are you an employee at{' '}
              {organization.name_en}? You can help complete the information
              below by{' '}
              <Link to="/suggest">anonymously suggesting improvements</Link>.
              Thanks for your help!
            </p>
          )}
          {this.props.data.organizationStatusCsv.score !== '0' && (
            <p className={styles.textLimit}>
              <b>Improve this data!</b> Are you an employee at{' '}
              {organization.name_en}? If the information below is incorrect or
              out of date, you can{' '}
              <Link to="/suggest">anonymously suggest improvements</Link>.
            </p>
          )}

          {this.props.data.allServiceCategoriesCsv.edges.map((row, i) => (
            <DepartmentServiceCollection
              key={row.node.id}
              services={services}
              filter={row.node.name}
              description={row.node.description}
              getServiceDetails={this.getServiceDetails}
              getServiceStatus={this.getServiceStatus}
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
    allServicesCsv(filter: { hidden: { ne: "1" } }) {
      edges {
        node {
          name
          category
          short_name
          url
          date_added
          hidden
          user_submitted
          description
        }
      }
      totalCount
    }
    organizationStatusCsv(organization: { eq: $acronym }) {
      score
      date_updated
      airtable
      asana
      basecamp
      circleci
      doodle
      dropbox
      evernote
      facebook
      figma
      fluidsurveys
      funretro
      gccollab
      gist
      github
      gmail
      googlechrome
      googledocs
      googlehangouts
      hootsuite
      instagram
      linkedin
      mozillafirefox
      prezi
      python
      quip
      rstudio
      reddit
      rocketchat
      skype
      slack
      slideshare
      slido
      surveymonkey
      tableau
      trello
      twitter
      webex
      appearin
      yammer
      youtube
      zoom
      zotero
    }
    allServiceCategoriesCsv {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`
