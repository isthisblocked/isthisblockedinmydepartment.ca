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
            description
            keywords
            twitterUsername
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
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: data.site.siteMetadata.twitterUsername,
            },
            {
              name: 'twitter:description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'twitter:title',
              content: pageTitle
                ? pageTitle + ' - ' + data.site.siteMetadata.title
                : data.site.siteMetadata.title,
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
