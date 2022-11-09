import * as React from "react"
import { Link } from "gatsby"
import { Flex, Box, Container } from 'theme-ui'
import { HomeIcon, ChevronLeftIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const Header = ({ siteTitle }) => (

  <Box 
    as="header" 
    p={4} color="text" 
    bg="muted"
  >
    <Container 
      p={4}
    >
      <Flex 
        sx={{ 
          justifyContent: 'space-between' 
        }}
      >
          <Link 
            to="/">
            <HomeIcon
              color="white"
            />
          </Link>
          <Link 
            to="/">
            <ChevronLeftIcon 
              color="white"
            />
          </Link>
          <Link 
            to="/">
            <QuestionMarkCircledIcon
              color="white"
            />
          </Link>
      </Flex>
    </Container>
  </Box>

)

export default Header
