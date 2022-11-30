const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Use for all News posts
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

  // Use for all Tutorials posts
  const {
    data: {
      allWpTutorial: {
        nodes: allTutorials
      },
    },
  } = await graphql(`
    query {
      allWpTutorial(sort: { date: DESC }) {
        nodes {
          id
          uri
        }
      }
    }
  `)

  // Use for templates
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const postTemplateTutorial = path.resolve(`./src/templates/tutorial-post.js`)

  // Use for all News posts
  allPosts.forEach(post => {
    createPage({
      path: post.uri,
      component: slash(postTemplate),
      context: {
        id: post.id,
      },
    })
  })

  // Use for all Tutorials posts
  allTutorials.forEach(post => {
    createPage({
      path: post.uri,
      component: slash(postTemplateTutorial),
      context: {
        id: post.id,
      },
    })
  })

}
