import * as React from "react"
import { Flex, Box, Container, Text } from 'theme-ui'

import CardLarge from "../Cards/CardLarge"

const Hero = ({ siteTitle }) => (

  <Box 
    color="text" 
    bg="muted"
    px="4"
  >
    <Container
      p={4}
    >

      <Flex
        sx={{
          flexDirection: 'column',
          paddingBottom: '4'
        }}
      >
        <Text>News</Text>
        <Text>Date</Text>
      </Flex>

      <CardLarge
        variant="wide"
      >
        <Box
          sx={{
            width: '40%'
          }}
        >
        </Box>
        <Flex
          sx={{
            width: '60%',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          p={4}
        >
          <Flex
            sx={{
              flexDirection: 'column',
            }}
          >
            <Text>Curabitur viverra, nulla bibendum interdum cursus</Text>
            <Text>Morbi semper rutrum laoreet. Aliquam luctus placerat sem. Proin varius augue sit amet libero imperdiet varius.</Text>
          </Flex>
            <Text>14 October 2022</Text>
        </Flex>
      </CardLarge>
    </Container>
  </Box>

)

export default Hero
