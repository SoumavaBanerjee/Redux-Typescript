import axios from "axios";
import { ActionTypes } from "../ActionTypes/index";
import { Action } from "../Actions/index";

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
    } catch (error: any) {
      console.timeLog(error);
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        error: error.message,
      });
    }
  };
};
