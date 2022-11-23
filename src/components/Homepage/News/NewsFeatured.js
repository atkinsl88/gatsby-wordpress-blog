import * as React from "react"
import { Box, Text, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardLarge"

const NewsFeatured = ({ postData }) => (
  <Box color="text" px="6">
    <Container px="4">
      <Box py="4">
        <Text
          sx={{
            fontSize: "4",
          }}
        >
          News
        </Text>
      </Box>
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {postData.map((data, index) => {
          return (
            <>
              <Card
                variant="wide"
                image={data.news_image.newsImage.gatsbyImage}
                title={data.title}
                excerpt={data.excerpt}
                date={data.date}
              />
            </>
          )
        })}
      </Flex>
    </Container>
  </Box>
)

export default NewsFeatured
