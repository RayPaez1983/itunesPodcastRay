/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/card.module.css";
import { useDispatch } from "react-redux";
import { setSelectedPodcast } from "@/store/itunesRedux/category.action";

interface CardProps {
  item: object;
  name: string;
  image: string;
  artist: string;
  author: string;
  picture: string;
  idx: number;
  podCastId: string;
}

const Card = ({ picture, artist, author, podCastId, item }: CardProps) => {
  const router = useRouter();
  const expirationTime = Date.now() + (24 * 60 * 60 * 1000); 
   return (
    <div
      onClick={() => {
        localStorage.setItem("podcasts", JSON.stringify({ item, expirationTime }));
        router.push({
          pathname: `/podcast/${podCastId}`
        });
      }}
      className={styles.card_main}
    >
      <img src={picture} alt="itunespic" className={styles.card_main__photo} />
      <div className={styles.card_main__content}>
        <h3> {artist.toLocaleUpperCase().substring(0, 18)}</h3>
        <h4>Author: {author}</h4>
      </div>
    </div>
  );
};

export default Card;
