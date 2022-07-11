import { LOAD_POKEMONS, LOAD_POKEMON_INFO, SET_POKEMONS, SET_POKEMON_INFO } from "../../constants/pokemon_constants"

const initialState = {
  pokemons: []
}

export const pokemonReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_POKEMONS: {
      return {...state, pokemons: []}
    }
    case SET_POKEMONS: {
      return {...state, pokemons: action.payload}
    }
    case LOAD_POKEMON_INFO: {
      return {...state, pokemonInfo: []}
    }
    case SET_POKEMON_INFO: {
      return {...state, pokemonInfo: action.payload}
    }
    default:
      return state
  }
}