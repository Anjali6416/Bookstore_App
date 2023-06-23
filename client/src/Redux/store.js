// NOTE: use this store variable to create a store.
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

export { store };
