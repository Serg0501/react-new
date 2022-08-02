import React, { Component } from 'react'
import styles from './CounterDz.module.scss'

export default class CounterDZ extends Component {
    state = {count : 0}

decrement = () => this.setState(({count}) => ({count: count - 1}))
increment = () => this.setState(({count}) => ({count: count + 1}))
  render() {
    const {count} = this.state
    return (
        <>
            <h1>Counter</h1>
            <div className={styles.counter}>
                <button className={styles.counterButton} onClick={this.decrement}>-</button>
                <div className={styles.counterValue}>{count}</div>
                <button className={styles.counterButton} onClick={this.increment}>+</button>
            </div>
        </>
    )
  }
}
