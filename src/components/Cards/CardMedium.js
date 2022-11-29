import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardMedium = ({ title, date, image, variant }) => (
  <Card
    bg="muted"
    sx={{
      width: "100%",
      "@media screen and (min-width: 768px)": {
        width: "32.5%",
      },
      marginBottom: "1rem",
      borderRadius: "15px",
    }}
  >
    <GatsbyImage image={image} />
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "200px",
      }}
      p="4"
    >
      <Text
        sx={{
          variant: "text.heading",
          fontSize: "1.25rem",
        }}
      >
        {title}
      </Text>
      <Text
        sx={{
          variant: "text.body",
          fontSize: "0.875rem",
        }}
      >
        {date}
      </Text>
    </Flex>
  </Card>
)

export default CardMedium
