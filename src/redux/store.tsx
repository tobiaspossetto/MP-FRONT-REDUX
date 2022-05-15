import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import cartReducer from './CartDucks'
import ProductsReducer from './ProductsDucks'
import paymentReducer from './PaymentDucks'
const rootReducer = combineReducers({
    cart: cartReducer,
    products: ProductsReducer,
    payment: paymentReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}

export{}


