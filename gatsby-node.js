const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  // const pageTemplate = path.resolve(`./src/templates/page.js`)
  // // We want to create a detailed page for each
  // // page node. We'll just use the WordPress Slug for the slug.
  // // The Page ID is prefixed with 'PAGE_'
  // allWordpressPage.edges.forEach(edge => {
  //   // Gatsby uses Redux to manage its internal state.
  //   // Plugins and sites can use functions like "createPage"
  //   // to interact with Gatsby.
  //   createPage({
  //     // Each page is required to have a `path` as well
  //     // as a template component. The `context` is
  //     // optional but is often necessary so the template
  //     // can query data specific to each page.
  //     path: `/${edge.node.slug}/`,
  //     component: slash(pageTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}