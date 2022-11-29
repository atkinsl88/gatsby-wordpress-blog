import * as React from "react"
import { Box, Container, Flex } from "theme-ui"

import Card from "../../Cards/CardMedium"

const NewsUpper = ({ postData }) => (
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

export default NewsUpper
