import { AnyAction } from 'redux';
import CATEGORY_ACTION_TYPES from './category.types';

export const ITUNES_INITIAL_STATE = {
  itunesPodcast: [],
  searchQuery: '',
  filteredData: [],
  selectedPodcast: {},
  selectedSinglePodcast: {},
  podcastCard: null,
  podcastData: null,
};

export const itunesReducer = (
  state = ITUNES_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_ITUNES:
      return { ...state, itunesPodcast: payload };
    case CATEGORY_ACTION_TYPES.SET_SEARCH_PODCAST:
      return { ...state, searchQuery: payload };
    case CATEGORY_ACTION_TYPES.SET_FILTERED_PODCAST:
      return { ...state, filteredData: payload };
    case CATEGORY_ACTION_TYPES.SET_SELECT_PODCAST:
      return { ...state, selectedPodcast: payload };
    case CATEGORY_ACTION_TYPES.SET_SELECT_SINGLE_PODCAST:
      return { ...state, selectedSinglePodcast: payload };
    case CATEGORY_ACTION_TYPES.SET_PODCAST_CARD:
      return { ...state, podcastCard: payload };
    case CATEGORY_ACTION_TYPES.SET_PODCAST_DATA:
      return { ...state, podcastData: payload };
    default:
      return state;
  }
};
