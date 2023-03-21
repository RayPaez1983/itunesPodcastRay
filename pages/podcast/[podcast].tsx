import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import BigCard from "@/components/bigCard";
import { useEffect, useState } from "react";
import { podcastType } from "@/utils/type";
import axios from "axios";
import CustomTable from "@/components/customTable";

const Podcast = () => {
  const router = useRouter();
  const { idx, link } = router.query;
  const [podcast, setPodcast] = useState<podcastType | null>(null);
  useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/get?url=
    ${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${link}&media=podcast&entity=podcastEpisode&limit=10`
    )}`
      )
      .then((response) => {
        setPodcast(response.data.contents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [link]);
  const parsePodcast = JSON.parse((podcast as unknown) as string);
  console.log(parsePodcast?.results, link);
  if (!parsePodcast?.results) return <div>...Loading</div>;
  return (
    <div>
      <div className={styles.main_header}>
        <h2>Podcaster</h2>
      </div>
      <div className={styles.content_postCard}>
        <BigCard />
        <div>
          <div className={styles.content_postCard_title}>
            Episode: {parsePodcast?.resultCount}
          </div>
          <CustomTable data={parsePodcast?.results} />
        </div>
      </div>
    </div>
  );
};

export default Podcast;
