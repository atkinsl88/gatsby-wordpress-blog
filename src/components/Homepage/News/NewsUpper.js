import * as React from "react"
import { Box, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardMedium"

const NewsUpper = ({ postData }) => (
  <Box color="text" px="6">
    <Container px="4">
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

export default NewsUpper
