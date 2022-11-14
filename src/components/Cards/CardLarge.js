import * as React from "react"
import { Box, Card, Flex } from 'theme-ui'

const CardLarge = ({ children, variant }) => (

  <Card
    sx={{
      width: variant === "wide" ? "100%" : 256,
    }}
    bg="#222323"
  >
    <Box>
      <Flex
          sx={{
            flexDirection: 'row',
            minHeight: '400px'
          }}
        >
      { children }
      </Flex>
    </Box>
    
  </Card>

)

export default CardLarge
