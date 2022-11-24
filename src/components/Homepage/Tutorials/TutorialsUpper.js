import * as React from "react"
import { Box, Container, Text, Flex } from "theme-ui"

import Card from "../../Cards/CardMedium"

const TutorialsUpper = ({ postData }) => (
  <Box
    color="text"
    bg="#2d2d2e"
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
          Tutorials
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
    </Container>
  </Box>
)

export default TutorialsUpper
