import * as React from "react"
import { Box, Container, Flex } from "theme-ui"
import { Link } from "gatsby"

import Card from "../../Cards/CardLarge"

const NewsFeatured = ({ postData }) => (
  <Box
    color="text"
    sx={{
      padding: "0",
      "@media screen and (min-width: 768px)": {
        padding: "0 4rem",
      },
    }}
  >
    <Container px="4">
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {postData.map((data, index) => {
          return (
            <Link to={data.uri} >
              <Card
                variant="wide"
                image={data.news_image.newsImage.gatsbyImage}
                title={data.title}
                excerpt={data.excerpt}
                date={data.date}
              />
            </Link>
          )
        })}
      </Flex>
    </Container>
  </Box>
)

export default NewsFeatured
