/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
})

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const readingPostTemplate = require.resolve(
    `./src/templates/readingTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // reading content
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.slug === null) {
      return
    }
    createPage({
      path: node.frontmatter.slug,
      component: readingPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
