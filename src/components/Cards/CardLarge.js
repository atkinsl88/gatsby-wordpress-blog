import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardLarge = ({ title, excerpt, date, image, variant }) => (
  <Card
    bg="muted"
    sx={{
      width: variant === "wide" ? "100%" : 256,
      marginBottom: "1rem",
    }}
  >
    <Flex
      sx={{
        flexDirection: "row",
      }}
    >
      <GatsbyImage image={image} />
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "200px",
          width: "50%",
        }}
        p="4"
      >
        <Flex
          sx={{
            flexDirection: "column",
          }}
        >
          <Text>{title}</Text>
          <Text>{excerpt}</Text>
        </Flex>
        <Text>{date}</Text>
      </Flex>
    </Flex>
  </Card>
)

export default CardLarge
