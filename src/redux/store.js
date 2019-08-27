import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//we use spread operator bc its more scalable
// it would still work if you added more middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
