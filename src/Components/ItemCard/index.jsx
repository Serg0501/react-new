import React, { Component } from 'react'
import styles from './ItemCard.module.css'

export default class ItemCard extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
  render() {
    const {name, price, imgSrc} = this.props.item;
    return (
      <div className={styles.cardContainer}>
        <img src={imgSrc} alt="photo"></img>
        <h2>{name}</h2>
        <h3>{price}</h3>  
      </div>
    )
  }
}

