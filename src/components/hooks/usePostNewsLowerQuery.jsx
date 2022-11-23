import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsLowerQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsLowerQuery {
        allWpNew(limit: 6, skip: 4, sort: {date: DESC}) {
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