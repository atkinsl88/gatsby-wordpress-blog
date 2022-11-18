import * as React from "react"
import { Flex, Box, Container, Text, Image } from 'theme-ui'
import image from "../../images/nyc.jpeg"

import CardSmall from "../Cards/CardSmall"

const More = ({ siteTitle }) => (

  <Box 
    color="text" 
    bg="muted"
    px="4"
    pt="4"
    pb="5"
  >
    <Container
      px="4"
      py="0"
    >
      <Box
        pb="4"
      >
        <Text>More</Text>
      </Box>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '4',
        }}
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

export default More
