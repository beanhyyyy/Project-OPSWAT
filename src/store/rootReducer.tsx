import { combineReducers } from "redux";

import articlesReducer from "./articles/reducer";
import todoReducer from "./todo/reducer";
import registerReducer from "./register/reducer";
import loginReducer from "./login/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  articles: articlesReducer,
  register: registerReducer,
  login: loginReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
