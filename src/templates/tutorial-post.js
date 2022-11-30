import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { Box, Container, Text } from "theme-ui"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const TutorialPostTemplate = ({ data: { post } }) => {
  return (
    <Layout>
      <Box
        px="4"
        sx={{
          maxWidth: "70%",
        }}
      >
        <Container px="5">
          <Text>
            <h1 itemProp="headline">{parse(post.title)}</h1>
          </Text>
          <Text>
            <p>{post.date}</p>
          </Text>
          {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
          )}
        </Container>
      </Box>
    </Layout>
  )
}

export const Head = ({ data: { post } }) => (
  <Seo title={post.title} description={post.excerpt} />
)

export default TutorialPostTemplate

export const pageQuery = graphql`
  query TutorialPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpTutorial(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
