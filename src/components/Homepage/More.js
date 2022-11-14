import * as React from "react"
import { Flex, Box, Container, Text } from 'theme-ui'

import CardSmall from "../Cards/CardSmall"

const More = ({ siteTitle }) => (

  <Box 
    color="text" 
    bg="muted"
    px="4"
    pt="4"
    pb="4"
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
        pb="4"
      >
        <CardSmall
          variant="wide"
        >
          <Box>
          </Box>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
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
        </CardSmall>
        <CardSmall
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
        </CardSmall>
        <CardSmall
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
        </CardSmall>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '4',
        }}
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

export default More
