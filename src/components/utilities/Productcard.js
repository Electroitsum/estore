import { useNavigate } from "react-router-dom";
import {Addcart} from '../../store/action/Addcartaction'
import { useDispatch } from "react-redux";
function Productcard(props) {
  const dispatch = useDispatch(); 
  // console.log(props.allproduct);
  const navigate = useNavigate();
  return (
    
    <div className="pro_main_con" onClick={() => {
      navigate(`/cart/${props.allproduct.id}`);
      dispatch(Addcart(props.allproduct.id))
      
    }}>
      <img
        src={props.allproduct ? props.allproduct.image : "Loading..."}
        alt="on" 
        className="pro_img"
      />
      <div className="pro_text_con">
        <h3>{props.allproduct ? props.allproduct.title : "Loading..."}</h3>

        <p>
          Price <span>{props.allproduct ? `${props.allproduct.price} $` : ""}</span>
        </p>
      </div>
    </div>
  );
}

export default Productcard;
