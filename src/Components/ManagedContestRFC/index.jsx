import React from 'react'
import CardContestRFC from './CardContestRFC'
import styles from './ManagedContestRFC.module.css'
import dbHeader from './dbHeader.json'
import dbCard from './dbCard.json'
import dbButton from './dbButton.json'

export default function ManagedContestRFC() {
  return (
    <div className={styles.mainConteiner}>
        <div className={styles.headerConteiner}>
            <h1>{dbHeader.dbHeder1}</h1>
            <h3>{dbHeader.dbHeder2}</h3>
            <p>{dbHeader.dbHeder3}</p>
        </div>
        <div className={styles.cardMainConteiner}>
            {dbCard.map((card, index) => 
            <CardContestRFC card={card} key={index}/>)}
        </div>
        <div className={styles.buttonConteiner}>
            <button>{dbButton.buttonName}</button>
        </div>
    </div>
  )
}
