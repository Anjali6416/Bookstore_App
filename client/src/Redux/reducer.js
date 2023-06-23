import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  PAYMENT_SUCCESSFUL,
} from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
const initState = { cartItems: [] };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      let item = state.cartItems.filter((ele)=> ele.id === payload.id);
      if(item.length >= 1){
        return state;
      }
      return { ...state, cartItems: [...state.cartItems, payload] };
    }
    case REMOVE_FROM_CART: {
      return { ...state, cartItems: state.cartItems.filter((ele) => ele.id != payload) };
    }
    case UPDATE_CART_QUANTITY: {
      return { ...state, cartItems: state.cartItems.map((ele) =>{
        if(ele.id == payload.id){
          ele.quantity += +payload.quantity
        }
        return ele;
      }) };
    }
    case PAYMENT_SUCCESSFUL: {
      return { ...state, cartItems: [] };
    }

    default:
      return state;
  }
};

export { reducer };
