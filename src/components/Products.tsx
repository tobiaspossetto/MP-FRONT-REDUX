import { Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCartAction} from '../redux/CartDucks'
import { addProductAction } from '../redux/ProductsDucks';

function Products() {
 
  const dispatch:any = useDispatch()
  //@ts-ignore
  const products:any= useSelector(store =>  store.products.array)
 
  return (
    
      <Stack className="Products" maxWidth="60%">
     
      <Button w='50%' onClick={()=> dispatch(addProductAction())}>Cargar productos</Button>

      <Stack>
        {products.map((cart:any)=>(
          <Stack key={cart.id} style={{
            padding: '10px',
            border: '1px solid #ccc',
            margin: '10px',
            width:"50%"
          }}>
           <Text> {cart.title}</Text>
            <Text> {cart.price}</Text>
            <Image alt="img" width='100px' src={cart.image}></Image>
            <Button onClick={() => {dispatch(addToCartAction(cart.id))}}>AGREGAR AL CARRITO</Button>
          </Stack>
        ))}
        
      </Stack>
    </Stack>
  
  );
}

export default Products;
