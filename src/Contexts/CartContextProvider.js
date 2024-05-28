import { useReducer , createContext } from "react"
import React from 'react'



const initialState = {
    selectedItems : [], 
    itemsCounter : 0 ,
    total: 0 , 
    checkout:false,
    
   
}
/////////////////////////////////////////
const sumItems= items =>{
    const itemsCounter = items.reduce((total , product )=> total+ product.quantity ,0 );
    let total = items.reduce((total , product)=> total + product.price * product.quantity , 0).toFixed(2) 
    return {itemsCounter: itemsCounter , total: total}

}

const cardReducer = (state , action) => {
    console.log(state);
    switch (action.type) {
        ///////////////////////////////////////////////////
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                    // itemsCounter:1,
                
                })
            }
            return {
                ...state ,
                 selectedItems:[...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout:false
            }

        //////////////////////////////////////////////////
        case "REMOVE_ITEM" : 
        const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
        return {
            ...state , 
            selectedItems: [...newSelectedItems], 
            ...sumItems(newSelectedItems) ,

        }    
        /////////////////////////////////////////////////
        case "INCREASE":
            const indexI= state.selectedItems.findIndex(item=> item.id === action.payload.id)
            state.selectedItems[indexI].quantity++ ;
           


            // state.itemsCounter++;
            console.log(state.selectedItems.quantity);
            return{
              ...state, 
                //   selectedItems:[...state.selectedItems] ,
                ...sumItems(state.selectedItems ),
                // ...state.selectedItems[indexI].quantity--
               

            }
        /////////////////////////////////////////////////
        case "DECREASE":
            const indexD= state.selectedItems.findIndex(item=> item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return{
                ...state, 
                ...sumItems(state.selectedItems)

            }
        /////////////////////////////////////////////////
        case "CHECKOUT":
            return{
                selectedItems : [], 
                itemsCounter : 0 ,
                total: 0 , 
                checkout:true
            }
        /////////////////////////////////////////////////
        case "CLEAR":
            return{
                selectedItems : [], 
                itemsCounter : 0 ,
                total: 0 , 
                checkout:false
            }
        
      default:
        return '';
    }

}

export const cardContext = createContext()

export default function CartContextProvider({children}) {
    const [state , dispatch]= useReducer(cardReducer , initialState)
  return (

        <cardContext.Provider value={{state , dispatch}}>
            {children}
        </cardContext.Provider>
  )
}
