import { combineReducers } from "redux";

import { itunesReducer } from "./itunesRedux/itunes.reducer";

export const rootReducer = combineReducers({
  itunesPodcast: itunesReducer,
});
