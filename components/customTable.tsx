/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { episodeType, podcastType } from "@/utils/type";

interface TableProps {
  data: episodeType[];
}

const CustomTable = ({ data }: TableProps) => {
  const router = useRouter();

  return (
    <table className={styles.content_table}>
      <thead>
        <tr>
          <th>Title</th>

          <th>Duration</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((episode: episodeType, index: number) => {
          console.log(episode, "the item");
          return (
            <tr key={index}>
              <td>{episode.trackName}</td>

              <td>{`${Math.round(episode.trackTimeMillis / 60000)} min`}</td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
              <td>
                <audio controls>
                  <source src={episode?.episodeUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
