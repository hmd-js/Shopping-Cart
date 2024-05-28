import React from 'react'
import trashIcon from "../image/trash.svg"
// import { useContext } from 'react';
// import { cardContext } from '../Contexts/CartContextProvider'
import { shorten } from '../helper/functions'
import styles from "./ShopCard.module.css";

import { useDispatch } from 'react-redux';


  const  ShopCard = ({data}) => {

    const dispatch = useDispatch();
    const {image , title , price , quantity  } = data;
    console.log(data);
  return (
    <div className={styles.container}>
        <img className={styles.productImage} src={image} alt='img' />
        <div className={styles.data}>
            <h3>{shorten(title)}</h3>
            <div> {price} $ </div>
        </div>
        <div className={styles.quantityParent}>
            <span className={styles.quantity}> {quantity} </span>
        </div>

        <div className={styles.buttonContainer}>
            {
                quantity >1 ?
                <button onClick={()=> dispatch( {type: "DECREASE" , payload : data} ) } >-</button> :
                <button onClick={()=> dispatch({type: "REMOVE_ITEM" , payload: data })} > <img src={trashIcon} alt='trashIcon' style={{width:"20px" }} /> </button>
            }
            <button onClick={()=> dispatch({type:"INCREASE" , payload: data}) }  >+</button>
        </div>
    </div>
  )
}
export default ShopCard ;
