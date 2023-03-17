/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
  

const BigCard = () => {
    const router = useRouter()
   
  const { name, comment, image, artist } = router.query
    return (
       
      <div>
      <div className={styles.big_card}>
        <img src={image as string} alt={image as string} />
        <p>
          {artist}</p>
        <p>
          by: {name} </p>
          Description:
        <div> {comment}</div>
      </div>
    </div>
      
    );
}

export default BigCard;