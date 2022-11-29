import { useStaticQuery, graphql } from "gatsby"

export const usePostNewsUpperQuery = () => {
  const { allWpNew } = useStaticQuery(
    graphql`
      query PostNewsUpperQuery {
        allWpNew(limit: 3, skip: 1, sort: {date: DESC}) {
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