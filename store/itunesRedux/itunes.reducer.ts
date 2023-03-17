import CATEGORY_ACTION_TYPES from "./category.types";
import { AnyAction } from 'redux'

export const ITUNES_INITIAL_STATE = {
  itunesPodcast: [],
  searchQuery: "",
  filteredData: [],
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
        return { ...state, searchQuery: action.payload };
      case CATEGORY_ACTION_TYPES.SET_FILTERED_PODCAST:
        return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};
