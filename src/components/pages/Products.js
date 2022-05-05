
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Addcart } from "../../store/action/Addcartaction";



function Products(){
    const id = useSelector((state)=>{console.log(state)})
    
    const navigate = useNavigate();
    function back(){
        navigate(-1);
    }
    return (
        <div className="product_main_con">
            Products
            <button onClick={back}>Back</button>
        </div>
    )
}

export default Products;