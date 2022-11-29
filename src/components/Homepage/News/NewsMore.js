import * as React from "react"
import { Box, Text, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardSmall"

const NewsLower = ({ postData }) => (
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
        pb="5"
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "1rem",
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
