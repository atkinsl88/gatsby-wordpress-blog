import * as React from "react"
import { Flex, Box, Container } from 'theme-ui'

const Footer = ({ siteTitle }) => (

  <Box 
    as="footer" 
    bg="#222323"
    px="4"
  >
    <Container 
      as="header" 
      p={4}
    >
      <Flex 
        sx={{ 
          justifyContent: 'space-between' 
        }}
      >
      </Flex>
    </Container>
  </Box>

)

export default Footer
