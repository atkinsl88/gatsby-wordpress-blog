import * as React from "react"
import { Flex, Box, Container, Text, Image } from 'theme-ui'
import image from "../../images/nyc.jpeg"

import CardMedium from "../Cards/CardMedium"
import CardSmall from "../Cards/CardSmall"

const News = ({ siteTitle }) => (

  <Box 
    color="text" 
    bg="#2d2d2e"
    px="4"
    pt="0"
    pb="5"
  >
    <Container
    >
      <Flex
        sx={{
          flexDirection: 'column',
        }}
        p="4"
      >
        <Text>Tutorial</Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '4',
        }}
        px="4"
        pt="2"
      >
        <CardMedium
          variant="thin"
        >
          <Box>
            <Image 
              src={image}
              sx={{ 
                variant: 'cards.medium.image' 
              }}
            />
          </Box>
          <Flex
            sx={{
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
            </Flex>
              <Text>14 October 2022</Text>
          </Flex>
        </CardMedium>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '4'
        }}
        px="4"
        pt="4"
      >
        <CardSmall
          variant="thin"
        >
          <Flex
            sx={{
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
            </Flex>
              <Text>14 October 2022</Text>
          </Flex>
          <Box
            p={4}
          >
            <Image 
              src={image}
              sx={{ 
                variant: 'cards.small.image' 
              }}
            />
          </Box>
        </CardSmall>
      </Flex>
    </Container>
      
  </Box>

)

export default News
