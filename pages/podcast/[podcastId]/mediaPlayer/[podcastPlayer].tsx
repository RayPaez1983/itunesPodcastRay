import { useRouter } from "next/router";
import BigCard from "@/components/common/bigCard";
import { useEffect, useState } from "react";
import { podcastType } from "@/utils/type";
import axios from "axios";
import CustomTable from "@/components/customTable";
import LoadingSpinner from "@/components/loadingSpinner";
import { useSelector } from "react-redux";
import styles from "@/styles/mediaPlayer.module.css";
import { setSelectedSinglePodcast } from './../../../../store/itunesRedux/category.action';
import MainHeader from "@/components/common/mainHeader";

const PodcastPlayer = () => {
  const router = useRouter();
  const { podcastFile } = router.query;
  const selectedSinglePodcast = useSelector(
    (state: any) => state.itunesPodcast.selectedSinglePodcast
  );

  console.log(
    selectedSinglePodcast,
    "la selesion que putaaa",
    router.query.podcastFile,
    "que esto",
    podcastFile
  );

  return (
    <>  <MainHeader />
    <div className={styles.mediaPlayer}>
    
      <BigCard
        image={selectedSinglePodcast.artworkUrl160}
        artist={selectedSinglePodcast.collectionName}
        author={selectedSinglePodcast.collectionName}
        comment={selectedSinglePodcast.shortDescription ? selectedSinglePodcast.shortDescription : selectedSinglePodcast.description}
      />
      <div className={styles.mediaPlayer_container}>
        <h1 className={styles.mediaPlayer_title}>{selectedSinglePodcast.trackName}</h1>
        <div className={styles.mediaPlayer_description}>{selectedSinglePodcast.description}</div>
      <audio controls muted className={styles.mediaPlayer_player}>
        <source src={selectedSinglePodcast.episodeUrl as string} type="audio/mp3" />
      </audio>
      </div>
    </div>
    </>
  );
};

export default PodcastPlayer;
