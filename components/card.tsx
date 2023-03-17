/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

interface CardProps {
  name: string, comment: string, image: string
  artist: string;
  author: string;
  picture: string;
  idx: number
  link: string
}


const Card = ({
  name,
  comment,
  image,
  picture,
  artist,
  author,
  idx,
  link
}: CardProps) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push({
      pathname: `/podcast/${idx}`,
      query: { name, comment, image, picture, artist, author, idx, link },
    })}
      className={styles.card_main}
    >
      <img
        src={picture}
        alt="itunespic"
        className={styles.card_main__photo}
      />
      <div className={styles.card_main__content}>
        <h3> {artist.toLocaleUpperCase().substring(0, 18)}</h3>
        <h4>Author: {author}</h4>
      </div>
    </div>

  );
}

export default Card;