import * as React from "react"
import { Box, Container, Text, Flex } from "theme-ui"

import Card from "../Cards/Card"

const News = ({ postData }) => (
  <Box color="text">
    <Container>
      <Flex
        sx={{
          margin: "3rem 0",
          alignContent: "center",
        }}
      >
        <Text 
          sx={{
            fontSize: 5,
            fontWeight: 'body',
          }}
          >News</Text>
      </Flex>
      <Flex
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

export default News
