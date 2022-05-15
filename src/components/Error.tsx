import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <Stack>
        <Text>OCURRIO UN ERROR PROCESANDO EL PAGO, INTENTELO MAS TARDE</Text>
        <Link to='/'>Volver a inicio</Link>
   </Stack>
  )
}

export default Error