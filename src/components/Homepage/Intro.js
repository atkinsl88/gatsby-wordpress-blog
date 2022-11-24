import * as React from "react"
import { Box, Flex, Text, Container } from "theme-ui"

const Intro = ({ postData }) => (
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
        py="4"
        sx={{
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            variant: "text.heading",
            fontSize: "2rem",
          }}
        >
          News
        </Text>
        <Text
          sx={{
            variant: "text.heading",
            fontSize: "1.875rem",
          }}
        >
          Date
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default Intro
