import * as React from "react"
import { Box, Text, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardSmall"

const NewsLower = ({ postData }) => (
  <Box color="text" px="6">
    <Container px="4">
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "3",
        }}
      >
        {postData.map((data, index) => {
          return (
            <>
              <Card
                variant="thin"
                image={data.news_image.newsImage.gatsbyImage}
                title={data.title}
                date={data.date}
              />
            </>
          )
        })}
      </Flex>
      <Flex
        sx={{
          justifyContent: "flex-end",
        }}
        py="4"
      >
        <Text
          sx={{
            fontSize: "2",
          }}
        >
          Read more News
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default NewsLower
