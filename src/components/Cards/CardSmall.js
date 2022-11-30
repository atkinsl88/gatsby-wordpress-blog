import * as React from "react"
import { Flex, Box, Card, Text } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CardSmall = ({ title, date, image, uri, variant }) => (
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
      <Flex p="4">
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "200px",
            width: "50%",
          }}
        >
          <Text
            pr="4"
            sx={{
              variant: "text.heading",
              color: "text",
              fontSize: "1rem",
            }}
          >
            {title}
          </Text>
          <Text
            sx={{
              variant: "text.body",
              color: "text",
              fontSize: "0.875rem",
            }}
          >
            {date}
          </Text>
        </Flex>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <GatsbyImage image={image} />
        </Box>
      </Flex>
    </Link>
  </Card>
)

export default CardSmall
