import * as React from "react"
import { Box, Container, Link, Flex } from "theme-ui"

import Card from "../../Cards/CardSmall"

const TutorialsLower = ({ postData }) => (
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
      <Flex
        sx={{
          justifyContent: "flex-end",
        }}
        py="4"
      >
        <Link
          href="/tutorials"
          sx={{
            fontSize: "2",
          }}
        >
          Read more Tutorials
        </Link>
      </Flex>
    </Container>
  </Box>
)

export default TutorialsLower
