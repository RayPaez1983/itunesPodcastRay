import { Podcasts } from '@/utils/type';

export const itunesPodcastSelector = (state: {
  itunesPodcast: { itunesPodcast: any };
}) => {
  console.log(state, 'state here ');
  const data = state.itunesPodcast.itunesPodcast;
  return data;
};
