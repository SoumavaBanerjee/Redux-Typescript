import { combineReducers } from "redux";
import repositoriesReducer from "../Reducers/repositoriesReducer";

const reducer = combineReducers({
  repositories: repositoriesReducer,
});

export default reducer;
