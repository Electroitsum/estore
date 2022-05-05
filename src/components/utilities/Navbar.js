
import { GiShoppingCart } from "react-icons/gi";
import { useSelector} from "react-redux";

function Navbar(){
    return(
        <div className="navbar_main_con">
            <img src={'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} alt="on" className="logo"/>
            <span className="nav_left_con">
                <span className="cart-con">
                <GiShoppingCart className="nav_cart" size={"60px"}/>
                {true? <span className="cart_add_no">10</span>:""}
                </span>
                <span>Log In</span>
            </span>

        </div>
    )
}

export default Navbar;