import * as React from "react"
import { Box, Text, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardSmall"

const NewsLower = ({ postData }) => (
  <Box color="text" px="6" pb="4">
    <Container px="4">
      <Box py="4">
        <Text
          sx={{
            fontSize: "4",
          }}
        >
          More News
        </Text>
      </Box>
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: '3',
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
    </Container>
  </Box>
)

export default NewsLower
