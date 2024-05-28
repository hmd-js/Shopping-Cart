import React from 'react';
import { Link } from 'react-router-dom';

// Functions
import {shorten,  isInCart, quantityCount } from '../helper/functions';

// Context
// import { useContext } from 'react';
// import { cardContext } from "../Contexts/CartContextProvider"
////////////redux:
import { addItem } from '../redux/cart/cartAction';
import { useSelector , useDispatch } from 'react-redux';

// Icons
import trashIcon from "../image/trash.svg";
//css
import styles from "./Product.module.css"

const Product = ({productData}) => {

    /////context//// const {state, dispatch} = useContext(cardContext);
    ///////////////redux:
    const state = useSelector (state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer} >
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer} >

                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
                    {quantityCount(state, productData.id) > 0 && <span> {quantityCount(state, productData.id)} </span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        // <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>    ///context///
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>     //////redux///addItem

                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Product;