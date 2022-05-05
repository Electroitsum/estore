const cartValue = [];
 const Addtocartreducer = (state=cartValue, action) =>{
    switch(action.type){
        case "ADD_CART":
            return {isloading: true}

        case "ADD_CART_SUCCESS":
            return {isloading: false, ...action.payload}
            
        default:
            return state;
    }

}
export default Addtocartreducer;