import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import BigCard from "@/components/common/bigCard";
import { useEffect, useState } from "react";
import { podcastType } from "@/utils/type";
import axios from "axios";
import CustomTable from "@/components/customTable";
import LoadingSpinner from "@/components/loadingSpinner";
import MainHeader from "@/components/common/mainHeader";
import { useSelector } from "react-redux";

const Podcast = () => {
  const router = useRouter();
  const { podcastId } = router.query;
  const [podcastData, setPodcast] = useState<podcastType | null>(null);
  const [podcastCard, setPodcastCard] = useState(null);
  useEffect(()=>{setPodcastCard(localStorage.getItem("podcasts"))},[])
  
  const dataPodcastCard = JSON.parse((podcastCard as unknown) as string)

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
  const parsePodcast = JSON.parse((podcastData as unknown) as string);

  if (!parsePodcast?.results) return <LoadingSpinner />;
    const image = dataPodcastCard.item["im:image"][2].label;
  const artist = dataPodcastCard.item["im:name"].label;
  const author = dataPodcastCard.item["im:artist"].label
    .replace("Podcast", "")
    .substring(0, 10);
  const comment = dataPodcastCard.item.summary.label;

  return (
    <div>
      <MainHeader />
      <div className={styles.content_postCard}>
        <BigCard
          image={image}
          artist={artist}
          author={author}
          comment={comment}
        />
        <div className={styles.content_postCard_container}>
          <div className={styles.content_postCard_title}>
            Episode: {parsePodcast?.resultCount}
          </div>
          <CustomTable
            data={parsePodcast?.results}
            podcastId={podcastId as string}
          />
        </div>
      </div>
    </div>
  );
};

export default Podcast;
