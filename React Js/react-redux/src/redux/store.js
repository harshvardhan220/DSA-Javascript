import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = configureStore(
  { reducer: reducers },
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //Second argument is empty state.

export default store;
