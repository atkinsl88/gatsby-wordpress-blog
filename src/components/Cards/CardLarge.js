import * as React from "react"
import { Flex, Card, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardLarge = ({ title, excerpt, date, image, variant }) => (
  <Card
    bg="muted"
    sx={{
      width: "100%",
      marginBottom: "1rem",
      borderRadius: "15px",
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        "@media screen and (min-width: 768px)": {
          flexDirection: "row",
        },
      }}
    >
      <GatsbyImage image={image} />
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "200px",
          width: "100%",
          "@media screen and (min-width: 768px)": {
            width: "50%",
          },
        }}
        p="4"
      >
        <Flex
          sx={{
            flexDirection: "column",
          }}
        >
          <Text
            sx={{
              variant: "text.heading",
              fontSize: "1.5rem",
            }}
          >
            {title}
          </Text>
          <Text
            sx={{
              variant: "text.body",
            }}
          >
            {excerpt}
          </Text>
        </Flex>
        <Text
          sx={{
            variant: "text.body",
            fontSize: "0.875rem",
          }}
        >
          {date}
        </Text>
      </Flex>
    </Flex>
  </Card>
)

export default CardLarge
