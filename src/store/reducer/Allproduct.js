let initialState = [];

const allproduct = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PROD":
      return {isloading: true, data: [state]}
    
    case "ALL_PROD_SUCCESS":
      return {isloading: false, data: [...action.payload]}

    default:
      return state;
  }
  
};

export default allproduct;
