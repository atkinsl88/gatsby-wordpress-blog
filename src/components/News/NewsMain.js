import * as React from "react"
import { Box, Text, Link, Container, Flex } from "theme-ui"

import Card from "../Cards/CardSmall"

const NewsMain = ({ postData }) => (
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
        <Link
          href="/news"
          sx={{
            fontSize: "2",
          }}
        >
          Read more News
        </Link>
      </Flex>
    </Container>
  </Box>
)

export default NewsMain
