import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Addcart, Allproducaction} from '../../store/action/Addcartaction'

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Addcart(id.id))
}, [dispatch]);
  const params = useParams();
  const selectedData = useSelector((state) => state.Addcartreducer);
  console.log(selectedData.isloading)
  const id = params;
  return (
    <div className="cart-main-con">
      {!selectedData.isloading?<div className="cart-main-in">
        <img
          src={!selectedData.isloading ? selectedData.image : "Loading"}
          alt="nan"
          className="item-img"
        />
        <span className="content">
          <h1>{selectedData.title}</h1>
          <p>{selectedData.description}</p>
          <p>{selectedData.price} $</p>
          <button className="add_cart_btn">Add to Cart</button>
        </span>
        
      </div>:
      <div style={{fontSize: "2rem"}}>Loading...</div>}
    </div>
  );
}

export default Cart;
