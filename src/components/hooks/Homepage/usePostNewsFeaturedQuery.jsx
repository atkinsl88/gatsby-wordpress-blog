import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsFeaturedQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsFeaturedQuery {
        allWpNew(limit: 1, sort: {date: DESC}) {
          edges {
            node {
              title
              date(formatString: "DD MMMM YYYY")
              excerpt
              news_image {
                newsImage {
                  gatsbyImage(width: 800)
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