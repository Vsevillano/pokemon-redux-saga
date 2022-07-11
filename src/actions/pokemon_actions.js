import { LOAD_POKEMONS, LOAD_POKEMON_INFO, SET_POKEMONS, SET_POKEMON_INFO } from "../constants/pokemon_constants"


export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons,
})

export const loadPokemons = () => ({
    type: LOAD_POKEMONS,
})

export const loadPokemonInfo = () => ({
    type: LOAD_POKEMON_INFO,
})

export const setPokemonInfo = (pokemon) => ({
    type: SET_POKEMON_INFO,
    payload: pokemon,
})
