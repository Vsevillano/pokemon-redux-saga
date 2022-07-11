import { LOAD_POKEMONS, SET_POKEMONS } from "../constants/pokemon_constants"


export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons,
})

export const loadPokemons = () => ({
    type: LOAD_POKEMONS,
})