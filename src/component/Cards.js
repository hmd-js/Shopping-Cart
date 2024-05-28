import React from 'react'
 import Card from './Card'
 import img1 from '../image/African-Violet.jpg'
 import img2 from '../image/Bloomscape.jpg'
 import img3 from '../image/peace-lily-for-you-gift-plant-by-nationbloom.jpg'
 import img4 from '../image/s.jpg'
 import styles from './Cards.module.css'

import { Component } from 'react'

export default class Cards extends Component {

  constructor(){
    super();
    this.state = {

        PhoneData:[
          {id:1 ,image:img1 , name:'African-Violet' , price:'50t'},
          {id:2 ,image: img2 , name: 'Maranta',price: '155t'},
          {id:3 ,image: img3,name : 'Spoty-filum', price: '230t'},
          {id:4 ,image:img4 ,name : 'Syngonium' ,price: '75t'}
        ]
    }
  }

  render() {
    return (
      
      <div className={styles.container}>

      {this.state.PhoneData.map(Phone=> <Card key={Phone.id} number= {Phone.id} image = {Phone.image} name={Phone.name} price={Phone.price} />)}

  </div>
    )
  }
}
