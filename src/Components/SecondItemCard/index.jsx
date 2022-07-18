import React, { Component } from 'react'
import styles from './SecondCard.module.css'

export default class SecondItemCard extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
  render() {
    const {imgSrc, h3, h2, p} = this.props.item;
    return (
      <div className={styles.secondCardContainer}>
        <img src={imgSrc} alt="photo"></img>
        <div className={styles.infoConteiner}>
        <h3>{h3}</h3>  
        <h2>{h2}</h2>
        <p>{p}</p>
        </div>
      </div>
    )
  }
}