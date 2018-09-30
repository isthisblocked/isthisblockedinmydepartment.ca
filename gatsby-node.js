/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

// This set of functions creates the per-organization and
// per-service pages, programatically from what is contained
// in the source data CSV files.
// This creates e.g. /organization/*/  and /service/*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
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
          allServicesCsv {
            edges {
              node {
                id
                short_name
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      // Create template pages.
      const organizationTemplate = path.resolve(
        `./src/templates/organization.js`
      )
      const serviceTemplate = path.resolve(`./src/templates/service.js`)

      // console.log(result.data.allOrganizationsCsv)

      _.each(result.data.allOrganizationsCsv.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/organization/${edge.node.acronym_en}/`,
          component: slash(organizationTemplate),
          context: {
            id: edge.node.id,
            acronym: edge.node.acronym_en,
          },
        })
      })

      _.each(result.data.allServicesCsv.edges, edge => {
        createPage({
          path: `/service/${edge.node.short_name}/`,
          component: slash(serviceTemplate),
          context: {
            id: edge.node.id,
            short_name: edge.node.short_name,
          },
        })
      })

      resolve()
    })
  })
}
