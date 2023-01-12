import { combineReducers } from "redux";

import articlesReducer from "./articles/reducer";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  articles: articlesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
