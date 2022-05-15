import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Cart from './Cart'
import Products from './Products'

const Home = () => {
  return (
    <Stack p='20px' className="App">
      <Text>Click en el boton para cargar products</Text>
      <Stack display='flex'  align="start" justify="space-around" direction="row">
      <Products/>
      <Cart/>
      </Stack>
      
    </Stack>
  )
}

export default Home