import * as React from "react"
import { Link } from "gatsby"
import { Flex, Box, Container } from "theme-ui"
import {
  HomeIcon,
  ChevronLeftIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons"

const Header = ({ siteTitle }) => (
  <Box as="header" bg="#222323" px="4">
    <Container p="4">
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
