import React, { Component } from 'react'

import Banner from './Banner';
import Cards from './Cards';
import Logos from './Logos';
import Search from './Search';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Cards/>
        <Search/>
        <Logos/>
      </div>
    )
  }
}
