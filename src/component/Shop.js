import React from 'react'
import ShopCard from './ShopCard'
import { Link } from 'react-router-dom';
import styles from "./Shop.module.css";

// import { cardContext } from '../Contexts/CartContextProvider'
// import { useContext } from 'react';
////redux 
import { useSelector , useDispatch } from 'react-redux';
//Actions////
import { clear } from '../redux/cart/cartAction';



export default function Shop() {

//   const {state , dispatch} = useContext(cardContext)
  const state = useSelector(state=> state.cartState)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
        <div className={styles.cartContainer}>
            {state.selectedItems.map(item => <ShopCard key={item.id} image ={item.image} title= {item.title} quantity={item.quantity} price= {item.price} data={item} />)}
        </div>

        {
            state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        {/* context */}
                        {/* <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button> */}
                        {/* redux */}
                        <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
        }

        {
            state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
        }

        {
            state.checkout && <div className={styles.complete}>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
        }
        
    </div>
)
}
