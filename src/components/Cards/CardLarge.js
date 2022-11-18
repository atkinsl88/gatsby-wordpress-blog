import * as React from "react"
import { Box, Card, Flex, Text } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const CardLarge = ({ title, date, image, variant }) => (
  <Card
    variant="large"
    sx={{
      width: variant === "wide" ? "100%" : 256,
    }}
  >
    <Box>
      <Flex
        sx={{
          flexDirection: "row",
          minHeight: "400px",
        }}
      >
        <Box
          sx={{
            width: "60%",
          }}
        >
          <GatsbyImage
            image={image}
            sx={{
              variant: "cards.large.image",
            }}
          />
        </Box>
        <Flex
          sx={{
            width: "40%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          p={4}
        >
          <Flex
            sx={{
              flexDirection: "column",
            }}
          >
            <Text>{title}</Text>
            <Text>
              Morbi semper rutrum laoreet. Aliquam luctus placerat sem. Proin
              varius augue sit amet libero imperdiet varius.
            </Text>
          </Flex>
          <Text>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  </Card>
)

export default CardLarge
