import {takeLatest, call, put} from 'redux-saga/effects'
import { setPokemonInfo } from '../../actions/pokemon_actions'
import { LOAD_POKEMON_INFO } from '../../constants/pokemon_constants'
import { getPokemonByName } from '../../utils/api_pokemon'

export function* loadPokemonInfoWatcher() {
    yield takeLatest(LOAD_POKEMON_INFO, loadPokemonInfoflow)
}

function* loadPokemonInfoflow() {
    const pokemonInfo = yield call(getPokemonByName)
    yield put(setPokemonInfo(pokemonInfo))
}