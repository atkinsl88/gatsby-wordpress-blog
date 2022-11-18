import * as React from "react"
import { Flex, Box, Container, Text, Image } from 'theme-ui'
import image from "../../images/nyc.jpeg"

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
          paddingBottom: '4',
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
            width: '60%'
          }}
        >
          <Image 
            sx={{ 
              variant: 'cards.large.image' 
            }}
            src={image}
          />
        </Box>
        <Flex
          sx={{
            width: '40%',
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
