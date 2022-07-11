import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { pokemonReducer } from "../reducers/pokemon/pokemonReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const reducer = combineReducers({
//     pokemonReducer,
// })

export const store  = createStore(pokemonReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)