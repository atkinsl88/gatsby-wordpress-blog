import * as React from "react"
import { Flex, Box, Container, Text } from 'theme-ui'

import CardMedium from "../Cards/CardMedium"
import CardSmall from "../Cards/CardSmall"

const News = ({ siteTitle }) => (

  <Box 
    color="text" 
    bg="#2d2d2e"
    px="4"
    pt="0"
    pb="4"
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
          variant="wide"
        >
          <Box>
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
        <CardMedium
          variant="wide"
        >
          <Box>
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
                flexDirection: 'column'
              }}
            >
              <Text>Curabitur viverra, nulla bibendum interdum cursus</Text>
            </Flex>
              <Text>14 October 2022</Text>
          </Flex>
        </CardMedium>
        <CardMedium
          variant="wide"
        >
          <Box>
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
          variant="wide"
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
          </Box>
        </CardSmall>

        <CardSmall
          variant="wide"
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
          </Box>
        </CardSmall>

        <CardSmall
          variant="wide"
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
          </Box>
        </CardSmall>

      </Flex>
    </Container>
      
  </Box>

)

export default News
