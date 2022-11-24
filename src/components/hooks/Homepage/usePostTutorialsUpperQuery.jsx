import { useStaticQuery, graphql } from "gatsby"

export const usePostTutorialsUpperQuery = () => {
  const { allWpTutorial } = useStaticQuery(
    graphql`
      query PostTutorialsUpperQuery {
        allWpTutorial(limit: 3, sort: {date: DESC}) {
          edges {
            node {
              title
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