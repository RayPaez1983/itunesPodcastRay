import { useRouter } from 'next/router';
import styles from '@/src/styles/Home.module.css';
import BigCard from '@/src/components/common/bigCard';
import { useEffect } from 'react';
import CustomTable from '@/src/components/customTable';
import LoadingSpinner from '@/src/components/loadingSpinner';
import MainHeader from '@/src/components/common/mainHeader';
import usePodcast from '@/utils/usePodcast';

const Podcast = () => {
  const router = useRouter();
  const { podcastId } = router.query;
  const [parseArtistPodcast, setSinglePodcast, dataPodcastCard] = usePodcast();
  useEffect(() => {
    setSinglePodcast(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=11`
    );
  }, [podcastId, setSinglePodcast]);

  if (!parseArtistPodcast?.results) return <LoadingSpinner />;
  const image = dataPodcastCard.item['im:image'][2].label;
  const artist = dataPodcastCard.item['im:name'].label;
  const author = dataPodcastCard.item['im:artist'].label
    .replace('Podcast', '')
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
            Episode: {parseArtistPodcast?.resultCount}
          </div>
          <CustomTable
            data={parseArtistPodcast?.results}
            podcastId={podcastId as string}
          />
        </div>
      </div>
    </div>
  );
};

export default Podcast;
