import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//we use spread operator bc its more scalable
// it would still work if you added more middleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
