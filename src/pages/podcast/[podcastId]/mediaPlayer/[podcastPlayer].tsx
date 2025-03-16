import BigCard from '@/src/components/common/bigCard';
import styles from '@/src/styles/mediaPlayer.module.css';
import MainHeader from '@/src/components/common/mainHeader';
import { useEffect, useState } from 'react';
import { PodcastToPlay } from '@/utils/type';
import LoadingSpinner from '@/src/components/loadingSpinner';

const PodcastPlayer = () => {
  const [podcastCard, setPodcastCard] = useState(null);
  const [state, setState] = useState<PodcastToPlay | null>(null);
  useEffect(() => {
    setPodcastCard(localStorage.getItem('podcasts') as unknown as null);
    setState(JSON.parse(localStorage.getItem('singlePodcast') as string));
  }, []);
  const dataPodcastCard = JSON.parse(podcastCard as unknown as string);

  const image = dataPodcastCard?.item['im:image'][2].label;
  const artist = dataPodcastCard?.item['im:name'].label;
  const author = dataPodcastCard?.item['im:artist'].label
    .replace('Podcast', '')
    .substring(0, 10);
  const comment = dataPodcastCard?.item?.summary.label;
  if (!state?.episode) return <LoadingSpinner />;

  return (
    <>
      <MainHeader />
      <div className={styles.mediaPlayer}>
        <BigCard
          image={image}
          artist={artist}
          author={author}
          comment={comment}
        />
        <div className={styles.mediaPlayer_container}>
          <h1 className={styles.mediaPlayer_title}>
            {state?.episode.trackName}
          </h1>
          <div className={styles.mediaPlayer_description}>
            {state?.episode.description}
          </div>
          <audio controls muted className={styles.mediaPlayer_player}>
            <source src={state?.episode.episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default PodcastPlayer;
