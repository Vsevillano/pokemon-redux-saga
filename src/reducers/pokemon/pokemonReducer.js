import { LOAD_POKEMONS, SET_POKEMONS } from "../../constants/pokemon_constants"

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
    default:
      return state
  }
}