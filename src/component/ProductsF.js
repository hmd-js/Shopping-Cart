import React, {  useEffect } from 'react'
import styles from "./ProductsF.module.css"
import Product from "./Product"
import Spinner from "../image/Spinner.gif"

/////context:
// import { useContext } from 'react'
// import { productsContext } from '../Contexts/ProductContextProvider'

////redux:
import {  useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products/productsAction'


export default function ProductsF() {

////////////////////////////////////////////////////context
  // const products = useContext(productsContext)
  // return (
  //   <div className={styles.container}>
  //       {products.length ?
  //           products.map(product=> <Product key={product.id} productData={product}   />) :
  //           <h1>Loading...</h1>
  //       }
  //   </div>
  // )
 
///////////////////////////////////////////////////redux:

const dispatch = useDispatch()
const productsState = useSelector(state => state.productsState)

useEffect(()=>{
if (!productsState.products.length){

  dispatch(fetchProducts())
}

}, [])

return (
  <div className={styles.container} >
    {
      productsState.loading ?
      
        <div className={styles.loading} >
          <img src={Spinner} alt='spinner' />
          <h2>Loading...</h2>
        </div>:
      
      productsState.error ?
      <p>Something went wrong</p>:
      productsState.products.map(product => <Product key={product.id} productData={product} />)
    }
  </div>
)
}
