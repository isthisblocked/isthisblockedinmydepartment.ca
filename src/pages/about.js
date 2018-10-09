import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'
import IntroText from '../components/IntroText'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <div className={styles.textLimit}>
      <h1>About this project</h1>

      <IntroText descriptionVisible={true} hideToggle={true} />

      <p>
        <Link to="/">Back to the homepage</Link>
      </p>
    </div>
  </Layout>
)

export default AboutPage
