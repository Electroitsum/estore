import axios from "axios";

export function Addcart(id) {
  return (dispatch) => {
    dispatch({type: "ADD_CART", isloading: true})
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      dispatch({
        type: "ADD_CART_SUCCESS",
        payload: res.data,
        isloading: false
      });
    });
  };
}

export function Allproducaction() {
  return (dispatch) => {
    dispatch({type: "ALL_PROD", isloading: true})
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({
        type: "ALL_PROD_SUCCESS",
        payload: res.data,
        isloading: false
      });
    });
  };
}
