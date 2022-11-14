import * as React from "react"
import { Box, Card, Flex } from 'theme-ui'

const CardMedium = ({ children, variant }) => (

  <Card
    sx={{
      width: variant === "wide" ? "100%" : 256,
    }}
    bg="#222323"
  >
    <Box>
      <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '300px'
          }}
        >
      { children }
      </Flex>
    </Box>
    
  </Card>

)

export default CardMedium
