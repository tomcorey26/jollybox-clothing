import { UserActionTypes } from "./user.types";
export const setCurrentUser = user => ({
  //javascript practice to use capital and snake space
  //for strings that should never change

  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
