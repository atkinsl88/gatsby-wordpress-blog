import { useStaticQuery, graphql } from "gatsby"

export const usePostTutorialsMainQuery = () => {
  const { allWpTutorial } = useStaticQuery(
    graphql`
      query PostTutorialsMainQuery {
        allWpTutorial(sort: {date: DESC}) {
          edges {
            node {
              title
              uri
              date(formatString: "DD MMMM YYYY")
              tutorials_image {
                tutorialImage {
                  gatsbyImage(width: 500)
                }
              }
            }
          }
        }
      }
    `
  ) 

  return allWpTutorial.edges.map(nodes => {return nodes.node})
}