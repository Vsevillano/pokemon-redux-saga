import { ADD_NOTE, LOAD_NOTES, SAVE_NOTES, SET_NOTES } from "../constants/constants"

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: note,
})

export const setNotes = (notes) => ({
    type: SET_NOTES,
    payload: notes,
})

export const saveNotes = (notes) => ({
    type: SAVE_NOTES,
    payload: notes,
})

export const loadNotes = () => ({
    type: LOAD_NOTES,
})