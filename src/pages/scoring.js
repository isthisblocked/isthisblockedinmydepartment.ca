import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'

class ScoringPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Scoring">
        <div className={styles.textLimit}>
          <h1>Scoring</h1>
          <p>
            The scores listed on this website for each department are designed
            to highlight departments that have opened up access to online
            services. Increased access to these tools helps public servants
            become more effective, collaborative, and connected in the modern
            digital world.
          </p>
          <p>Scores are calculated as follows:</p>
          <ul className={styles.listStandard}>
            <li>
              <b>3 points</b> for each service that is open by default
            </li>
            <li>
              <b>1 point</b> for each service that is restricted to certain
              staff or only available on request
            </li>
            <li>
              <b>0 points</b> for services whose status is unknown
            </li>
            <li>
              <b>-2 points</b> for each service that is blocked and not
              available on request
            </li>
          </ul>
          <p>
            There are currently {this.props.data.allServicesCsv.totalCount}{' '}
            online services in the dataset, for a maximum score of{' '}
            <b>{this.props.data.allServicesCsv.totalCount * 3}</b> (all services
            open by default). The percentages listed on the homepage indicate
            how close each department is to the maximum score.
          </p>
          <p>
            If a service is listed with an incorrect status for your department,
            please <Link to="/suggest">suggest an update</Link>. Suggestions are
            anonymous and help to improve the quality of the underlying dataset
            over time.
          </p>
        </div>
      </Layout>
    )
  }
}

export default ScoringPage

export const ScoringPageQuery = graphql`
  query {
    allServicesCsv(filter: { hidden: { ne: "1" } }) {
      totalCount
    }
  }
`
