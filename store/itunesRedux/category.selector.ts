import { Podcasts } from '@/utils/type';

export const itunesPodcastSelector = (state: {
  itunesPodcast: { itunesPodcast: any };
}) => {

  const data = state.itunesPodcast.itunesPodcast;
  return data;
};
