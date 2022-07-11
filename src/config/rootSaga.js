import {fork} from 'redux-saga/effects'
import { loadNotesWatcher } from '../reducers/notes/loadNotesSaga'
import { saveNotesWatcher } from '../reducers/notes/saveNotesSaga'
import { loadPokemonsWatcher } from '../reducers/pokemon/loadPokemonSaga'


export function* rootSaga() {
    yield fork(loadNotesWatcher)
    yield fork(saveNotesWatcher)
    yield fork(loadPokemonsWatcher)
}