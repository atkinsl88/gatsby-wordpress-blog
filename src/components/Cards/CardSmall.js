import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardSmall = ({ title, date, image, variant }) => (
  <Card
    bg="muted"
    sx={{
      width: variant === "thin" ? "32.5%" : 256,
      marginBottom: "1rem",
    }}
  >
    <Flex p="4">
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "200px",
        }}
      >
        <Text>{title}</Text>
        <Text>{date}</Text>
      </Flex>
      <GatsbyImage
        image={image}
      />
    </Flex>
  </Card>
)

export default CardSmall
