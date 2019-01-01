import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'

class OrganizationPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Departments and Agencies">
        <div className={styles.textLimit}>
          <h1>Departments and Agencies</h1>
          <p>
            Select a department or agency below for details on which online
            services are available or blocked from within that organization.
          </p>
          <ul className={styles.listStandard}>
            {this.props.data.allOrganizationsCsv.edges.map((row, i) => (
              <li key={row.node.id}>
                <Link to={`/organization/${row.node.acronym_en}/`}>
                  {row.node.name_en}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.spaceAbove}>
            If your department or agency isn’t currently included in the list
            above, you can{' '}
            <Link to="/suggest">suggest adding it to the dataset</Link>.
          </p>
        </div>
      </Layout>
    )
  }
}

export default OrganizationPage

export const OrganizationPageQuery = graphql`
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
  }
`
