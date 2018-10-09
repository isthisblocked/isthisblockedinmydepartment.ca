import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
// import './layout.css'
import 'sanitize.css'
import styles from '../styles/sass.module.scss'

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={
            pageTitle
              ? pageTitle + ' - ' + data.site.siteMetadata.title
              : data.site.siteMetadata.title
          }
          meta={[
            {
              name: 'description',
              content:
                'An unofficial dashboard of online services blocked by federal government departments in Canada',
            },
            {
              name: 'keywords',
              content:
                'Canada, public service, Government of Canada, digital government, information technology, public sector',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.container}>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
