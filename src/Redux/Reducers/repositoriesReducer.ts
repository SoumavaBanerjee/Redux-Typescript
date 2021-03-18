// Here, case statements acts as type Gaurds that narrows down
// The possibility of type of Action.
//  here 'type' acts as the discriminator
// Refer to here to understand more about type gaurds:
//  - https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
//  - https://dev.to/pauloedurezende/the-power-of-union-and-type-guard-in-typescript-1amg

import { Action } from "../Actions/index";
import { ActionTypes } from "../ActionTypes/index";

interface RepositoriesState {
  data: string[];
  error: string | null;
  loading: boolean;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
