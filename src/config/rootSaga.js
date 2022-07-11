import {fork} from 'redux-saga/effects'
import { loadPokemonInfoWatcher } from '../reducers/pokemon/loadPokemonInfoSaga'
import { loadPokemonsWatcher } from '../reducers/pokemon/loadPokemonSaga'

export function* rootSaga() {
    yield fork(loadPokemonsWatcher)
    yield fork(loadPokemonInfoWatcher)
}