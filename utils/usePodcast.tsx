import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PodcastToPlay } from './type';

const usePodcast = () => {
  const [podcastGetData, setPodcastGetData] = useState(null);
  const [podcastCard, setPodcastCard] = useState(null);
  const [tableData, setTableData] = useState<PodcastToPlay | null>(null);
  useEffect(() => {
    setPodcastCard(localStorage.getItem('podcasts') as unknown as null);
    setTableData(JSON.parse(localStorage.getItem('singlePodcast') as string));
  }, []);

  const parse = JSON.parse(podcastCard as unknown as string);
  const setSinglePodcast = (queryPath: string) => {
    const iTunesUrl = queryPath;
    const encodedUrl = encodeURIComponent(iTunesUrl!);
    const apiUrl = `${process.env.NEXT_PUBLIC_ITUNES_BASE_URL}${encodedUrl}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setPodcastGetData(response.data.contents);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dataPodcastCard = JSON.parse(podcastCard as unknown as string);
  const parseArtistPodcast = JSON.parse(podcastGetData as unknown as string);
  console.log(dataPodcastCard, parse, podcastGetData);
  return [parseArtistPodcast, setSinglePodcast, dataPodcastCard];
};
export default usePodcast;
