import { USER_LOGIN, LOADER } from "../actionTypes";
import { Auth } from "aws-amplify";
export const authenticate = flag => {
  return {
    type: USER_LOGIN,
    payload: flag
  };
};

export const loader = flag => {
  return {
    type: LOADER,
    payload: flag
  };
};

export const logout = (flag) =>async dispatch => {
  await Auth.signOut();
  dispatch({
    type: USER_LOGIN,
    payload: flag
  });
};
