import { Button, Image, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCartAction, QuitItemAction} from '../redux/CartDucks'
import { createPaymentAction } from '../redux/PaymentDucks';
import { addProductAction } from '../redux/ProductsDucks';

function Cart() {
 
  const dispatch:any = useDispatch()
  //@ts-ignore
  const cart:any= useSelector(store =>  store.cart)
  //@ts-ignore
 const payment:any = useSelector(store => store.payment)

 useEffect(()=>{
     console.log(payment.init_point)
 },[payment.init_point])
  return (
    
      <Stack maxWidth='40%' className="Cart">
     
      <Text>CART</Text>

      <Stack>
        {cart.array.map((cart:any)=>(
          <Stack bg='blue.100' key={cart.id} style={{
            padding: '10px',
            border: '1px solid #ccc',
            margin: '10px',
            width:"100%"
          }}>
           <Text> {cart.title}</Text>
            <Text> {cart.price}</Text>
            <Image alt="img" width='100px' src={cart.image}></Image>
            <Button bg='red.600' color='white' onClick={() => {dispatch(QuitItemAction(cart.id))}}>Quitar</Button>
          
          </Stack>
        ))}
        <Text>Total = {cart.total}</Text>
          {(cart.array.length>0 || payment.init_point ==='') &&<Button bg='green.600' color='white' onClick={() => {dispatch(createPaymentAction())}}>Comprar</Button>}
          {payment.init_point !== ''&&<Link color='white' bg='blue.500' href={payment.init_point}>PAGAR CON MERCADO PAGO</Link>}
      </Stack>
    </Stack>
  
  );
}

export default Cart;
