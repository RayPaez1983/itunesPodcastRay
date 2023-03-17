import { createAction } from "../../utils/createAction"
import CATEGORY_ACTION_TYPES from "./category.types";

export const setCategoriesMapAction = (itunesArray: []) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_ITUNES, itunesArray);

  export const setSearchQuery = (query: string) =>
  createAction(CATEGORY_ACTION_TYPES.SET_SEARCH_PODCAST, query);
  
  
  export const setFilteredData = (data: []) => 
  createAction(CATEGORY_ACTION_TYPES.SET_FILTERED_PODCAST, data);
