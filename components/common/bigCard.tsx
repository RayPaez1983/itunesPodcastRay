/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/bigCard.module.css";
interface CardProps {
  artist: string;
  author: string;
  image: string;
  comment: string;
}

const BigCard = ({ image, artist, author, comment }: CardProps) => {
  return (
    <div className={styles.big_card}>
      <div className={styles.big_card_img}>
        <img src={image} alt={image} />
      </div>
      <div className={styles.big_card_title}>
        <p className={styles.big_card_artist}>{artist}</p>
        <p className={styles.big_card_author}>by: {author} </p>
      </div>
      <div className={styles.big_card_description}>
        <span> Description:</span>
        <p>
          {comment.substring(0, 80)}...
        </p>
      </div>
    </div>
  );
};

export default BigCard;
