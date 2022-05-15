import axios from "axios";

export {};

//CONSTANTES
const dataInicial = {
  array: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";

//REDUCER
export default function productsReducer(state = dataInicial, action: {type: string, payload: any}) {
  switch (action.type) {
    case ADD_PRODUCT:
        return {...state, array: [...action.payload]};                                                                                             
    default:
        return state;
  }
}

//ACCIONES

export const addProductAction = () => async (dispatch: any, getState: any) => {
  try {
      let res = await axios.get('https://fakestoreapi.com/products/')

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
