import { Podcast, Podcasts } from '@/utils/type';
import { createAction } from '../../../utils/createAction';
import CATEGORY_ACTION_TYPES from './category.types';
import axios from 'axios';
import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const setPodcastMapAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<Podcasts>
> => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const iTunesUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    try {
      const response = await axios.get(iTunesUrl);
      dispatch(createAction(CATEGORY_ACTION_TYPES.FETCH_ITUNES, response.data));
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };
};
export const setSearchQuery = (query: string) =>
  createAction(CATEGORY_ACTION_TYPES.SET_SEARCH_PODCAST, query);

export const setFilteredData = (data: Podcast[]) =>
  createAction(CATEGORY_ACTION_TYPES.SET_FILTERED_PODCAST, data);

export const setSelectedPodcast = (podcast: object) =>
  createAction(CATEGORY_ACTION_TYPES.SET_SELECT_PODCAST, podcast);

export const setSelectedSinglePodcast = (podcast: object) =>
  createAction(CATEGORY_ACTION_TYPES.SET_SELECT_SINGLE_PODCAST, podcast);

export const setPodcastCard = (podcastCard: any) =>
  createAction(CATEGORY_ACTION_TYPES.SET_PODCAST_CARD, podcastCard);

export const setPodcastData = (podcastData: any) => {
  createAction(CATEGORY_ACTION_TYPES.SET_PODCAST_DATA, podcastData);
};
