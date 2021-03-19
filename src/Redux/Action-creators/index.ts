/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { ActionTypes } from "../ActionTypes/index";
import { Action } from "../Actions/index";
import { Dispatch } from "redux";

const URL = `https://registry.npmjs.com/-/v1/search`;

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(URL, {
        params: {
          text: term,
        },
      });

      console.log(data);
      const names = data.objects.map((object: any) => {
        return object.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      console.timeLog(error);
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
