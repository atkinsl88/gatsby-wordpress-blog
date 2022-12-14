import * as React from "react"
import { Link } from "gatsby"
import { Flex, Box, Container } from "theme-ui"
import {
  HomeIcon,
  ChevronLeftIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons"

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    bg="muted"
    sx={{
      padding: "0",
      "@media screen and (min-width: 768px)": {
        padding: "2rem 4rem",
      },
    }}
  >
    <Container px="4">
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link to="/">
            <HomeIcon color="white" />
          </Link>
          <Link to="/">
            <ChevronLeftIcon color="white" />
          </Link>
        </Box>
        <Link to="/">
          <QuestionMarkCircledIcon color="white" />
        </Link>
      </Flex>
    </Container>
  </Box>
)

export default Header
