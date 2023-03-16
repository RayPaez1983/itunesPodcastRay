/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

interface CardProps {
    query: {name: string, comment: string};
    artist: string;
    picture: string;
    idx: number
  }
  

const Card = ({
    query,
    picture,
    artist,
    idx
  }: CardProps) => {
    const router = useRouter()
    return (
       
        <div onClick={() => router.push({
          pathname: `/podcast/${idx}`,
          query: { name: query.name, comment: query.comment },
        })}
        className={styles.card_main}
        >

          <img
            src={picture}
            alt="itunespic"
            className={styles.card_main__photo}
          />
          <div className={styles.card_main__content}>
          <h3> {artist.toLocaleUpperCase()}</h3>
          </div>
        </div>
      
    );
}

export default Card;