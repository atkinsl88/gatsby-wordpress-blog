import * as React from "react"
import { Flex, Box, Container, Card, Text } from 'theme-ui'

const HomepageFeatured = ({ siteTitle }) => (

  <Box 
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
        <Card
          sx={{
            maxWidth: 256,
          }}
          bg="gray"
          variant="compact"
        >
          <Flex
            sx={{ 
              flexDirection: 'column' 
            }}
          >
            <Text>Card</Text>
            <Text>Card</Text>
          </Flex>
        </Card>
        <Card
          bg="gray"
          variant="compact"
        >
          <Flex
            sx={{ 
              flexDirection: 'column' 
            }}
          >
            <Text>Card</Text>
            <Text>Card</Text>
          </Flex>
        </Card>
        <Card
          bg="gray"
          variant="compact"
        >
          <Flex
            sx={{ 
              flexDirection: 'column' 
            }}
          >
            <Text>Card</Text>
            <Text>Card</Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  </Box>

)

export default HomepageFeatured
