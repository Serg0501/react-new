import React from 'react'
import styles from './CardContestRFC.module.css'

export default function CardContestRFC(props) {
    const {head, body, iconSrc} = props.card;
    
  return (
    <div className={styles.cardConteiner}>
        <div className={styles.cardHeader}>
            <img src={iconSrc} alt="img" />
            <h4>{head}</h4>
        </div>
        <div className={styles.cardInformation}>
            <p>{body}</p>
        </div>

    </div>
  )
}
