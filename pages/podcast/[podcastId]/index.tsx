import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import BigCard from "@/components/bigCard";
import { useEffect, useState } from "react";
import { podcastType } from "@/utils/type";
import axios from "axios";
import CustomTable from "@/components/customTable";
import LoadingSpinner from "@/components/loadingSpinner";
import { useSelector } from "react-redux";

const Podcast = () => {
  const router = useRouter();
  const { podcastId, comment } = router.query;
  const [podcastData, setPodcast] = useState<podcastType | null>(null);
 console.log(comment, router, 'que pasa mi perro')
  useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/get?url=
    ${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`
    )}`
      )
      .then((response) => {
        setPodcast(response.data.contents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [podcastId]);
  const parsePodcast = JSON.parse(podcastData as unknown as string);
  console.log(parsePodcast?.results, router, 'que esteso');
  if (!parsePodcast?.results) return <LoadingSpinner />;
  return (
    <div>
      <div className={styles.main_header}>
        <h2>Podcaster</h2>
      </div>
      <div className={styles.content_postCard}>
        <BigCard image={parsePodcast?.results[0].artworkUrl100 as string}
        artist={parsePodcast?.results[0].artistName }
        author={parsePodcast?.results[0].collectionName }
        comment={comment as string}/>
        <div>
          <div className={styles.content_postCard_title}>
            Episode: {parsePodcast?.resultCount}
          </div>
          <CustomTable data={parsePodcast?.results} podcastId={podcastId as string}/>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
