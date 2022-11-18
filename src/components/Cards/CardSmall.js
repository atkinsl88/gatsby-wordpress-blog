import * as React from "react"
import { Box, Card, Flex } from 'theme-ui'

const CardSmall = ({ children, variant }) => (

  <Card
    variant="small"
    sx={{
      width: variant === "thin" ? "33%" : 256,
    }}
  >
    <Box>
      <Flex
          sx={{
            flexDirection: 'row',
            minHeight: '200px'
          }}
        >
      { children }
      </Flex>
    </Box>
    
  </Card>

)

export default CardSmall
