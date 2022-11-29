const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allWpNew: {
        nodes: allPosts
      },
    },
  } = await graphql(`
    query {
      allWpNew(sort: { date: DESC }) {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allPosts.forEach(post => {
    createPage({
      path: post.uri,
      component: slash(postTemplate),
      context: {
        id: post.id,
      },
    })
  })
}
