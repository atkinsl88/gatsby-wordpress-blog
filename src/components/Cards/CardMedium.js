import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CardMedium = ({ title, date, image, uri, variant }) => (
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
    <Link to={uri}>
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
            color: "text",
          }}
        >
          {title}
        </Text>
        <Text
          sx={{
            variant: "text.body",
            fontSize: "0.875rem",
            color: "text",
          }}
        >
          {date}
        </Text>
      </Flex>
    </Link>
  </Card>
)

export default CardMedium
