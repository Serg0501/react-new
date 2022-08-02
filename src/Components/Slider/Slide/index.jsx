import React from 'react';
import styles from './Slide.module.scss'

export default function Slide(props) {
    const {images} = props;
    const {currentImgId} = props;
  return (
    <div className={styles.conteinerImg}>
      <img src={images[currentImgId]} alt="img"/>
    </div>
  )
};
