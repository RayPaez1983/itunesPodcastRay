/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
interface CardProps {
  artist: string;
  author: string;
  image: string;
  comment: string;
}

const BigCard = ({ image, artist, author, comment }: CardProps) => {
  const selectedPodcast = useSelector(
    (state: any) => state.itunesPodcast.selectedPodcast
  );
  console
  return (
    <div>
      <div className={styles.big_card}>
        <img
          src={image}
          alt={image}
          style={{width: '174px'}}
        />
        <p>{artist}</p>
        <p>by: {author} </p>
        Description:
        <div> {comment}</div>
      </div>
    </div>
  );
};

export default BigCard;
