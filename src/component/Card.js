
import styles from './Card.module.css'

import React, { Component } from 'react'

import down from '../image/down.svg'
import up from '../image/up.svg'
import { Link } from 'react-router-dom';

export default class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0 ,
        }
    }

    downHandeler = ()=>{
        if (this.state.counter >0){

            this.setState(prevState => ({
                counter : prevState.counter -1,
            }))
        }   
        
        
                 
    }

    upHandeler = () => {
        this.setState((prevState)=> ({
            counter : prevState.counter +1 , 
        }))
    }

    isInCart= (state , id )=>{
        const result = state.selectedItems.find(item=> item.id===id)
        return result
    }

  render() {
    const {number , image , name , price} = this.props
    const {counter} = this.state

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <img src={image} alt='img' />
                
                <h1 className={styles.name}>
                    {name}
                </h1>


                <div className={styles.price}>
                    {price} {counter>0 && `*${counter}=${price.split("t")[0] *counter}t`}
                </div>
                <Link to={`/products/${number}`} >Details</Link>

                <div className={styles.counter} >
                    <img className={this.state.counter>0 ? "" : styles.deactive} src={down} alt='down' onClick={this.downHandeler}/>
                    <span>{this.state.counter}</span>
                    <img src={up} alt='up' onClick={this.upHandeler}/>

                </div>

            </div>

        </div>
    )
  }
}

