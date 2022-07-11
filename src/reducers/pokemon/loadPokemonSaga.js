import {takeLatest, call, put} from 'redux-saga/effects'
import { setPokemons } from '../../actions/pokemon_actions'
import { LOAD_POKEMONS } from '../../constants/pokemon_constants'
import { getAPIPokemons } from '../../utils/api_pokemon'

export function* loadPokemonsWatcher() {
    yield takeLatest(LOAD_POKEMONS, loadPokemonsflow)
}

function* loadPokemonsflow() {
    const pokemons = yield call(getAPIPokemons)
    yield put(setPokemons(pokemons))
}