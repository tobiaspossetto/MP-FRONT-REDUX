import axios from "axios";


export {};
//CONSTANTES
const dataInicial = {
  init_point:'',
  id: '',
  status: ''
};

const CREATE_PAYMENT = "CREATE_PAYMENT";


//REDUCER
export default function paymentReducer(state = dataInicial, action: {type: string, payload: any}) {
  switch (action.type) {
    case CREATE_PAYMENT:
        return {...state, init_point: action.payload.init_point, id: action.payload.id, status: 'redirect'};
                                                                                            
    default:
        return state;
  }
}

//ACCIONES

export const createPaymentAction = () => async (dispatch: any, getState: any) => {
  try {
    
      let items = getState().cart.array.map((prod: { title: any; description: any; quantity: any; price: any; image: any; })=>{
        return {
          title: prod.title,
          description: prod.description,
          quantity: 1,
          unit_price: prod.price,
          picture_url: prod.image,
     
        }
      })
      const body= {items,payer_email:'test_user_64675925@testuser.com'}
         console.log(body)
    let res = await axios.post('https://efficacious-erratic-melon.glitch.me/api/payment',body)
    console.log(res.data)
    dispatch({
      type: CREATE_PAYMENT,
      payload: res.data,
    });

  } catch (error) {
    console.log(error);
  }
};


