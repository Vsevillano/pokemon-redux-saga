export const getNotes = async() => {
    return fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()) 
}

export const postNotes = async(notes) => {
    return fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()) 
}