import React from 'react'
import styles from './Banner.module.css'
import bannerImg from '../image/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'

export default function Banner() {
  return (
    <div className={styles.container}>
        <img src={bannerImg} alt='img' />
        <p>
            Welcome to Tabiat.Herb
            <br/>
             from://React.js
            
        </p>


    </div>
  )
}
