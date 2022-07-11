export const getAPIPokemons = async() => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json()) 
}

export const getPokemonByName = async(name) => {
    return fetch(`https://pokeapi.co/api/v2/${name}`).then(res => res.json()) 
}