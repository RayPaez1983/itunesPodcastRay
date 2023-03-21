/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { episodeType } from "@/utils/type";
import {
    setSelectedSinglePodcast
  } from "@/store/itunesRedux/category.action";
import { useDispatch } from "react-redux";
interface TableProps {
  data: episodeType[];
  podcastId: string
}

const CustomTable = ({ data, podcastId }: TableProps) => {
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
          const podcastFile = episode?.episodeUrl;
          const trackID = episode.trackId;
          console.log(episode, "lo que nescito");
          return (
            <tr key={index}>
              <td
                onClick={() =>{
                  router.push({
                    pathname: `/podcast/${podcastId}/mediaPlayer/${trackID}`,
                    query: { podcastFile, episode: JSON.stringify(episode)  },
                  })}
                  

                }
              >
                <a>{episode.trackName}</a>
              </td>

              <td>{`${Math.round(episode.trackTimeMillis / 60000)} min`}</td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
