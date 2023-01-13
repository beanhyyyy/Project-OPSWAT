import { combineReducers } from "redux";

import articlesReducer from "./articles/reducer";
import todoReducer from "./todo/reducer";
import registerReducer from "./register/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  articles: articlesReducer,
  register: registerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
