import * as React from "react"
import { Box, Container, Text, Flex } from "theme-ui"

import Card from "../Cards/Card"

const Tutorials = ({ postData }) => (
  <Box color="text" p="4" bg="gray">
    <Container px="4" py="0">
      <Flex
        sx={{
          margin: "3rem 0",
          alignContent: "center",
        }}
      >
        <Text>Tutorials</Text>
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

export default Tutorials
