/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/table.module.css";
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
  data.shift()
  const router = useRouter();
  const dispatch = useDispatch();
  const handleObjectClick = (object: any) => {
    dispatch(setSelectedSinglePodcast(object));
  };
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
          const trackID = episode.trackId;
            return (
            <tr key={index}>
              <td
                onClick={() =>{
                handleObjectClick(episode)
                  router.push({
                    pathname: `/podcast/${podcastId}/mediaPlayer/${trackID}`,
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
