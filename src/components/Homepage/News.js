import * as React from "react"
import { Box, Container, Text, Flex } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

import CardMedium from "../Cards/Card"

const News = ({ postData }) => (
  <Box color="text" px="4" pb="5">
    <Container px="4" py="0">
      <Text>News</Text>
      <Flex
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1',
        }}
      >
        {postData.map((data, index) => {
          return (
            <>
              <CardMedium
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
