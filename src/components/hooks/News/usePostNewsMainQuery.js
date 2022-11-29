import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsMainQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsMainQuery {
        allWpNew(sort: {date: DESC}) {
          edges {
            node {
              title
              date(formatString: "DD MMMM YYYY")
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