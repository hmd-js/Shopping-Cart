import React, { Component } from 'react'
import styles from './Search.module.css'

export default class Search extends Component {

  constructor(){
    super();
    this.state = {
      text : ''
    }
  }


  changeHandeler=(event)=>{
    this.setState({
     text: event.target.value 
    })
    
  }

  render() {
    return (
      <div className={styles.container}>
        <p>
            Search! what you want!?
        </p>

        <div>
        <input type='text' value={this.state.text} onChange={this.changeHandeler} placeholder='Search...' />
        <br/>
        <br/>
        <span> {this.state.text} </span>
        </div>
      </div>
    )
  }
}
