import React, { Component } from 'react'
import styles from './Logos.module.css'
import logo1 from '../image/logo1.jpg'
import logo2 from '../image/logo2.jpg'
import logo3 from '../image/3.jpg'

export default class Logos extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>How Support Us?!</h3>
        <div>
        <img src={logo1} alt='logo1'/>
        <img src={logo2} alt='logo2'/>
        <img src={logo3} alt='logo3'/>

        </div>
      </div>
    )
  }
}
