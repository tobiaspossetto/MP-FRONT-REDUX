import axios from "axios";


export {};
//CONSTANTES
const dataInicial = {
  array: [],
  total:0
};

const ADD_TO_CART = "ADD_TO_CART";
const QUIT_ITEM_CART = "QUIT_ITEM_CART";

//REDUCER
export default function cartReducer(state = dataInicial, action: {type: string, payload: any}) {
  switch (action.type) {
    case ADD_TO_CART:
        return {...state, array: [...state.array, action.payload.arrayData], total: action.payload.totalData};
    case QUIT_ITEM_CART:
      return {...state, array: [...action.payload.arrayData], total: action.payload.totalData};                                                                                        
    default:
        return state;
  }
}

//ACCIONES

export const addToCartAction = (id: number) => async (dispatch: any, getState: any) => {
  try {
      let res = await axios.get('https://fakestoreapi.com/products/'+id)
      res.data.price.toFixed(2)
      
      let totalResult = getState().cart.total + res.data.price
      totalResult.toFixed(2)
    dispatch({
      type: ADD_TO_CART,
      payload: {arrayData:res.data, totalData:totalResult},
    });

  } catch (error) {
    console.log(error);
  }
};

export const QuitItemAction = (id: number) =>  (dispatch: any, getState: any) => {
  try {
    let array = getState().cart.array
    let priceToQuit = array.find((item:any)=>item.id===id).price
    priceToQuit.toFixed(2)
    let result = array.filter((item:any)=> item.id !== id)
    let totalPriceResult = getState().cart.total - priceToQuit
   totalPriceResult.toFixed(2)
    dispatch({
      type: QUIT_ITEM_CART,
      payload: {arrayData:result, totalData:totalPriceResult},
    });
  } catch (error) {
    console.log(error);
  }
    
  }
