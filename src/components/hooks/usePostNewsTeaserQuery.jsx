import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsTeaserQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsTeaserQuery {
        allWpNew(limit: 4, sort: {date: DESC}) {
          edges {
            node {
              title
              date
              news_image {
                newsImage {
                  gatsbyImage(width: 500)
                }
              }
            }
          }
        }
      }
    `
  ) 

  return allWpNew.edges.map(nodes => {return nodes.node})
}