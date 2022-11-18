import * as React from "react"
import { Box, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardMedium = ({ title, date, image, variant }) => (
  <Card
    variant="primary"
    bg="muted"
    sx={{
      width: variant === "thin" ? "32%" : 256,
    }}
  >
    <GatsbyImage
      image={image}
      sx={{
        variant: "cards.large.image",
      }}
    />
    <Box>
      <Text>{date}</Text>
      <Text>{title}</Text>
    </Box>
  </Card>
)

export default CardMedium
