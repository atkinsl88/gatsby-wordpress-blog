import * as React from "react"
import { Box, Container, Text, Flex } from "theme-ui"

import Card from "../../Cards/CardSmall"

const TutorialsLower = ({ postData }) => (
  <Box color="text" px="6" bg="#2d2d2e">
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
          console.log(data)
          return (
            <>
              <Card
                variant="thin"
                image={data.tutorials_image.tutorialImage.gatsbyImage}
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
          Read more Tutorials
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default TutorialsLower
