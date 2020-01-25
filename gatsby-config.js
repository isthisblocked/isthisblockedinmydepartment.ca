module.exports = {
  siteMetadata: {
    title: 'Is this blocked in my department.ca',
    description:
      'An unofficial dashboard of which online services are available or blocked by federal government departments in Canada.',
    keywords:
      'Canada, public service, Government of Canada, digital government, information technology, public sector',
    siteUrl: 'https://isthisblockedinmydepartment.ca',
    twitterUsername: '@isthisblocked',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Is this blocked in my department.ca',
        short_name: 'Is this blocked',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/itb-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127422939-1',
        head: true,
        anonymize: true,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
