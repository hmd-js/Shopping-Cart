import React from 'react'
import styles from './Navbar.module.css'
import logo from '../logo.svg'
import shopIcon from "../image/shop.svg"

import { Link } from 'react-router-dom'

// import { useContext } from 'react'
// import { cardContext } from '../Contexts/CartContextProvider'
import { useSelector } from 'react-redux'

export default  function Navbar () {

  // const {state} =  useContext(cardContext);
   const state = useSelector(state=> state.cartState)


  return (
    <header className={styles.header}>
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                <li><Link to='/'>Home </Link></li>
                <li><Link to='/products'>Products </Link></li>
                <li><Link to='/SignUp'>SignUp </Link></li>
                <li><Link to='/AboutUs'>About Us </Link></li>
            </ul>

        </div>
        <div className={styles.logo}>
          <div className={styles.shopLogo}>
           <Link to='/shop'> <img src={shopIcon} alt='shopIcon'/> </Link>
            <span>{ state.itemsCounter}  </span>
          </div>
          <div>
            <img className={styles.ReactLogo} src={logo} alt='logo' />
          </div>

        </div>
        
    </header>
  )
}
