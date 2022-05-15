import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'

import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Success from './components/Success';
import Error from './components/Error';
function App() {
  const store = generateStore()
  
  return (
    <Provider store={store}>
       <ChakraProvider>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/success" element={<Success />} />
           <Route path="/error" element={<Error />} />
         </Routes>
    </ChakraProvider>
      </Provider>
    
  );
}

export default App;
