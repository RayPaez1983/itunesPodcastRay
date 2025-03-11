import BigCard from '@/components/common/bigCard';
import { useSelector } from 'react-redux';
import styles from '@/styles/mediaPlayer.module.css';
import MainHeader from '@/components/common/mainHeader';
import { useEffect, useState } from 'react';

const PodcastPlayer = () => {
  const selectedSinglePodcast = useSelector(
    (state: any) => state.itunesPodcast.selectedSinglePodcast
  );
  const [podcastCard, setPodcastCard] = useState(null);
  useEffect(() => {
    setPodcastCard(localStorage.getItem('podcasts') as unknown as null);
  }, []);
  const dataPodcastCard = JSON.parse(podcastCard as unknown as string);

  const image = dataPodcastCard?.item['im:image'][2].label;
  const artist = dataPodcastCard?.item['im:name'].label;
  const author = dataPodcastCard?.item['im:artist'].label
    .replace('Podcast', '')
    .substring(0, 10);
  const comment = dataPodcastCard?.item?.summary.label;
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
            {selectedSinglePodcast.trackName}
          </h1>
          <div className={styles.mediaPlayer_description}>
            {selectedSinglePodcast.description}
          </div>
          <audio controls muted className={styles.mediaPlayer_player}>
            <source src={selectedSinglePodcast.episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default PodcastPlayer;
