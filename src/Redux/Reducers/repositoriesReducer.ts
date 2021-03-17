interface RepositoriesState {
  data: string[];
  error: string | null;
  loading: boolean;
}

interface SearchRepositoryAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

// Here, case statements acts as type Gaurds that narrows down
// The possibility of type of Action.
//  here 'type' acts as the discriminator

// Refer to here to understand more about type gaurds:
//  - https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
//  - https://dev.to/pauloedurezende/the-power-of-union-and-type-guard-in-typescript-1amg

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoryAction
    | SearchRepositoriesErrorAction
    | SearchRepositoriesSuccessAction
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
