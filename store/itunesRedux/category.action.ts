import { createAction } from "../../utils/createAction"
import CATEGORY_ACTION_TYPES from "./category.types";

export const setCategoriesMapAction = (itunesArray: []) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_ITUNES, itunesArray);
