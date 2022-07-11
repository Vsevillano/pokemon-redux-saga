import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { notesReducer } from "../reducers/notes/notesReducer";
import { pokemonReducer } from "../reducers/pokemon/pokemonReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    pokemonReducer,
    notesReducer,
})

export const store  = createStore(pokemonReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)