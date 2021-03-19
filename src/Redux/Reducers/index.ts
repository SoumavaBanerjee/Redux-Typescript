import { combineReducers } from "redux";
import repositoriesReducer from "../Reducers/repositoriesReducer";

/**
 * redux with TS problems: useSelector hook does not hold information about the structure of state
 * so, we need to annotate a type called DefaultRootState.
 */

const reducer = combineReducers({
  repositories: repositoriesReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
