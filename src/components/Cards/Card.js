import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardMedium = ({ title, date, image, variant }) => (
  <Card
    bg="muted"
    sx={{
      width: variant === "thin" ? "24%" : 256,
      marginBottom: "1rem",
    }}
  >
    <GatsbyImage
      sx={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        width: "100%",
      }}
      image={image}
    />
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "200px",
      }}
      p="4"
    >
      <Text>{title}</Text>
      <Text>{date}</Text>
    </Flex>
  </Card>
)

export default CardMedium
