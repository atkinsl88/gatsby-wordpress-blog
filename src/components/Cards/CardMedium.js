import * as React from "react"
import { Box, Card, Flex } from 'theme-ui'

const CardMedium = ({ children, variant }) => (

  <Card
    variant="medium"
    sx={{
      width: variant === "thin" ? "33%" : 256,
    }}
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
