import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/index";

export const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
