import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

import Layout from '../components/layout'

const SuggestPage = () => (
  <Layout>
    <div className={styles.textLimit}>
      <h1>Suggest an update</h1>
      <p>
        Data on this website is crowdsourced from public servants across the
        federal government. Suggested updates are always welcome, and help to
        keep the website up to date as departments make firewall and technical
        changes.
      </p>
      <p>
        Suggestions can be submitted anonymously using the following Google
        Forms. If Google Forms is unavailable on your computer, then you can
        open these links using your smartphone.
      </p>
      <ul className={styles.listStandard}>
        <li>
          <b>Department-wide updates</b>
          <br />
          To suggest changes for more than one service within a specific
          department
        </li>
        <li>
          <b>Specific service updates</b>
          <br />
          To quickly suggest changes for an individual service within a
          department
        </li>
        <li>
          <b>Add a new service</b>
          <br />
          To suggest a new online service (collaboration tools, messaging
          platforms, etc.) to add to the dataset
        </li>
        <li>
          <b>Add a new department</b>
          <br />
          To suggest a federal department or agency to add to the dataset
        </li>
      </ul>
      <p>Thanks for your contributions to isthisblockedinmydepartment.ca! </p>
      <p>
        <Link to="/">Back to the homepage</Link>
      </p>
    </div>
  </Layout>
)

export default SuggestPage
