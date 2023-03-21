import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import BigCard from "@/components/bigCard";
import { useEffect, useState } from "react";
import { podcastType } from "@/utils/type";
import axios from "axios";
import CustomTable from "@/components/customTable";
import LoadingSpinner from "@/components/loadingSpinner";
import { useSelector } from "react-redux";

const PodcastPlayer = () => {
    const router = useRouter();
    const { podcastFile, trackID, episode} = router.query;
    const selectedPodcast = useSelector(
        (state: any) => state.itunesPodcast.selectedPodcast
      );

      console.log(selectedPodcast, 'la selesion que putaaa',  router,'que esto', podcastFile)

  return (
    <div>
       <BigCard image={selectedPodcast["im:image"][1].label}
        artist={selectedPodcast["im:artist"].label }
        author={selectedPodcast.title.label }
        comment={selectedPodcast.summary.label}/>
        {trackID}
 
                <audio controls>
                  <source src={podcastFile as string} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
            
    </div>
  );
};

export default PodcastPlayer;
