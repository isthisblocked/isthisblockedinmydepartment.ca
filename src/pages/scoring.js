import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'

const ScoringPage = () => (
  <Layout>
    <div className={styles.textLimit}>
      <h1>Scoring</h1>
      <p>
        The scores listed on this website for each department are designed to
        highlight departments that have opened up access to online services.
        Increased access to these tools helps public servants become more
        effective, collaborative, and connected in the modern digital world.
      </p>
      <p>Scores are calculated as follows:</p>
      <ul className={styles.listStandard}>
        <li>
          <b>3 points</b> for each service that is open by default
        </li>
        <li>
          <b>1 point</b> for each service that is restricted to certain staff or
          only available on request
        </li>
        <li>
          <b>0 points</b> for services whose status is unknown
        </li>
        <li>
          <b>-2 points</b> for each service that is blocked and not available on
          request
        </li>
      </ul>
      <p>
        If a service is listed with an incorrect status for your department,
        please <Link to="/suggest">suggest an update</Link>. Suggestions are
        anonymous and help to improve the quality of the underlying dataset over
        time.
      </p>
      <p>
        <Link to="/">Back to the homepage</Link>
      </p>
    </div>
  </Layout>
)

export default ScoringPage
