import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsMoreQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsMoreQuery {
        allWpNew(skip: 10, sort: {date: DESC}) {
          edges {
            node {
              title
              uri
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