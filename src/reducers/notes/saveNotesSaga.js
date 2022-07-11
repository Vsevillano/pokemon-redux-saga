import {takeLatest, call} from 'redux-saga/effects'
import { SAVE_NOTES } from '../../constants/constants'
import { postNotes } from '../../utils/api'

export function* saveNotesWatcher() {
    yield takeLatest(SAVE_NOTES, saveNotesflow )
}

function* saveNotesflow(action) {
   yield call(postNotes, action.payload)
}