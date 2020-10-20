import { ITEM_CLICKED } from "./ActionType";

export const itemClicked = (item) => ({
  type: ITEM_CLICKED,
  payload: item,
});
