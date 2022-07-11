import {takeLatest, call, put} from 'redux-saga/effects'
import { setNotes } from '../../actions/actions'
import { LOAD_NOTES } from '../../constants/constants'
import { getNotes } from '../../utils/api'

export function* loadNotesWatcher() {
    yield takeLatest(LOAD_NOTES, loadNotesflow )
}

function* loadNotesflow() {
    const notes = yield call(getNotes)
    yield put(setNotes(notes))
}