const initialState = {
    loading : true , 
    products : [], 
    error : ""
}

 const productsReducer = (state = initialState , action) =>{
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
           return {
                loading: true, 
                ...state
            }
        case "FETCH_PRODUCTS_SUCCESS" : 
        return {
            loading : false , 
            products : action.payload
        }
        case "FETCH_PRODUCTS_FAILURE": 
        return{
            loading : false , 
            error : action.payload
        }
            
        default:
        return state
    }

}
export default productsReducer
