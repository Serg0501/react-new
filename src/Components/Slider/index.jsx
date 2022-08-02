import React, {useState} from 'react';
import ProtoTypes from 'prop-types';
import Controller from './Controller';
import styles from './Slider.module.scss';
import Slide from './Slide';

export default function Slider() {
    const [currentImgId, setCurrentImgId] = useState(0);
    const images = [
      'https://klike.net/uploads/posts/2019-11/1575024424_1.jpg',
      'https://slovnet.ru/wp-content/uploads/2019/01/3-2.png',
      'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif',
      'https://www.meme-arsenal.com/memes/9284bc39647b547d2d755dc2143080d9.jpg',
      'https://i.pinimg.com/236x/e3/ba/98/e3ba986107834369a195019323de5753.jpg',
    ];

    const setPrevSlide = () => {
      setCurrentImgId(currentImgId === 0 ? images.lenght - 1 : currentImgId - 1);   
    };

    const setNextSlide = () => {
      setCurrentImgId (currentImgId => { 
        const next = currentImgId === images.lenght - 1 ? 0 : currentImgId + 1
        return next }) 
    };

  return (
    <div className={styles.container}>
        <Slide images={images} 
        currentImgId={currentImgId} />
        <Controller setPrevSlide={setPrevSlide} 
        setNextSlide={setNextSlide}/>
    </div>
  )
};

Slider.protoTypes = {
    images: ProtoTypes.array.isRequired,
};