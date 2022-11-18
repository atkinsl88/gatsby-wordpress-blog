import * as React from "react"
import { Flex, Box, Container, Text } from "theme-ui"
import image from "../../images/nyc.jpeg"
import { GatsbyImage } from "gatsby-plugin-image"

import CardLarge from "../Cards/CardLarge"
import CardMedium from "../Cards/CardMedium"

const News = ({ postData }) => (
  <Box color="text" bg="muted" px="4" pb="5">
    <Container px="4" py="0">
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "4",
          paddingBottom: "4",
        }}
      >
        {postData.map((data, index) => {
          return (
            <>
            {index < 1 ? 
              <CardLarge 
                variant="wide" 
                image={data.news_image.newsImage.gatsbyImage}
                title={data.title}
                date={data.date}
              />
             : 
              <CardMedium variant="thin">
                <Box>
                  <GatsbyImage
                    image={data.news_image.newsImage.gatsbyImage}
                    sx={{
                      variant: "cards.medium.image",
                    }}
                  />
                </Box>
                <Flex
                  sx={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  p={4}
                >
                  <Flex
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Text>{data.title}</Text>
                  </Flex>
                  <Text>{data.date}</Text>
                </Flex>
              </CardMedium> 
            }
            </>
          )
        })}
      </Flex>
    </Container>
  </Box>
)

export default News
