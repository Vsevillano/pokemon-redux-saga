export const getAPIPokemons = async() => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0').then(res => res.json()) 
}

export const getPokemonByName = async(name) => {
    return fetch(`https://pokeapi.co/api/v2/${name}`).then(res => res.json()) 
}