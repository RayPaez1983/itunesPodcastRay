import CATEGORY_ACTION_TYPES from "./category.types";
import { AnyAction } from 'redux'

export const ITUNES_INITIAL_STATE = {
  itunesPodcast: [],
};

export const itunesReducer = (
  state = ITUNES_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_ITUNES:
      return { ...state, itunesPodcast: payload };

    default:
      return state;
  }
};
