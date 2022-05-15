import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
   <Stack>
        <Text>Se agrego el producto al carrito</Text>
        <Link to='/'>Volver a inicio</Link>
   </Stack>
  )
}

export default Success