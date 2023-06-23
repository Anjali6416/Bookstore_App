import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  PAYMENT_SUCCESSFUL,
} from "./actionTypes";

const addItemtoCart = (data, dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });
};
const removeItemfromCart = (payload, dispatch) => {
  dispatch({
    type:REMOVE_FROM_CART,
    payload,
  });
};
const updateCartItemQuantity = (payload, dispatch) => {
  dispatch({
    type: UPDATE_CART_QUANTITY,
    payload,
  });
};

const makePayment = (payload, dispatch) => {
  dispatch({
    type: PAYMENT_SUCCESSFUL,
    payload,
  });
};

export {
  addItemtoCart,
  removeItemfromCart,
  updateCartItemQuantity,
  makePayment,
};
