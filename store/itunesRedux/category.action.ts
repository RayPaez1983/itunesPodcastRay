import { createAction } from "../../utils/createAction"
import CATEGORY_ACTION_TYPES from "./category.types";

export const setPodcastMapAction = (itunesArray: []) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_ITUNES, itunesArray);

  export const setSearchQuery = (query: string) =>
  createAction(CATEGORY_ACTION_TYPES.SET_SEARCH_PODCAST, query);
  
  
  export const setFilteredData = (data: []) => 
  createAction(CATEGORY_ACTION_TYPES.SET_FILTERED_PODCAST, data);

  export const setSelectedPodcast = (podcast: object) => 
  createAction(CATEGORY_ACTION_TYPES.SET_SELECT_PODCAST, podcast);

  export const setSelectedSinglePodcast = (podcast: object) => 
  createAction(CATEGORY_ACTION_TYPES.SET_SELECT_SINGLE_PODCAST, podcast);

  export const setPodcastCard = (podcastCard: any) =>
    createAction(CATEGORY_ACTION_TYPES.SET_PODCAST_CARD, podcastCard);

  export const setPodcastData = (podcastData: any) =>
    createAction(CATEGORY_ACTION_TYPES.SET_PODCAST_DATA, podcastData);

