import * as React from "react"
import { Flex, Box, Container, Text } from 'theme-ui'

const Footer = ({ siteTitle }) => (

  <Box 
    as="footer" 
    p={4} 
    color="text" 
    bg="muted"
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
        <Text>Card</Text>
      </Flex>
    </Container>
  </Box>

)

export default Footer
