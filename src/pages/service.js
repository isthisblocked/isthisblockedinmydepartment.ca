import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'

class ServicePage extends React.Component {
  state = {
    indexedServices: {},
  }

  componentDidMount() {
    let indexedServices = {}

    // Create indexed object for each service by category
    _.each(this.props.data.allServiceCategoriesCsv.edges, function(edge) {
      indexedServices[edge.node.name] = {
        description: edge.node.description,
        services: [],
      }
    })

    // Add services to the matching category
    _.each(this.props.data.allServicesCsv.edges, function(edge) {
      indexedServices[edge.node.category]['services'].push(edge.node)
    })

    this.setState({
      indexedServices: indexedServices,
    })
  }

  render() {
    return (
      <Layout pageTitle="Online services">
        <div className={styles.textLimit}>
          <h1>Online services</h1>
          <p>
            Select an online service below to see which departments and agencies
            are able to access it.
          </p>

          {this.props.data.allServiceCategoriesCsv.edges.map((row, i) => (
            <div key={row.node.id}>
              <h2>{row.node.description}</h2>

              {/* Need to check if the array exists, because on first component load it hasn't been indexed (in the componentDidMount function) yet. */}
              {this.state.indexedServices[row.node.name] && (
                <ul className={styles.listStandard}>
                  {this.state.indexedServices[row.node.name].services.map(
                    (item, i) => (
                      <li key={item.short_name}>
                        <Link to={`/service/${item.short_name}/`}>
                          {item.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}

          <p className={styles.spaceAbove}>
            If an online tool or service that you’re interested in isn’t
            included in the list above, you can{' '}
            <Link to="/suggest">suggest adding it to the dataset</Link>.
          </p>
        </div>
      </Layout>
    )
  }
}

export default ServicePage

export const ServicePageQuery = graphql`
  query {
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
