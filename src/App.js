import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, loadNotes, saveNotes } from "./actions/actions";
import { NewNoteInput } from "./components/NewNoteInput";
import { loadPokemons } from "./actions/pokemon_actions";
import { Pokemon } from "./components/Pokemon";
import './index.css'

function App() {
  const notes = useSelector((state) => state.notes);
  const pokemons = useSelector((state) => state.pokemons);

  const [pokemonInfo, setpokemonInfo] = useState(null);

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note))
  };

  const onSave = () => {
    dispatch(saveNotes(notes))
  }

  const onLoad = () => {
    dispatch(loadNotes())
  }

  const onPokemonClick = () => {
    setpokemonInfo({})
  };

  const onBackClick = () => {
    setpokemonInfo(null)
  }

    useEffect(() => {
      dispatch(loadPokemons())
  }, [dispatch])

  return (
    <>
      <div className='container-fluid px-0'> 
        <nav className="navbar navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <a href="/" alt="logo" className="navbar-brand">
              Pokemon App
            </a>
          </div>
        </nav> 
        {!pokemonInfo ? (
        <div className='container-fluid'> 
          <div className="row">
            <NewNoteInput addNote={onAddNote} />
            <hr />
            {/* <ul>
              {notes.map((note) => {
                return <li key={note}>{note}</li>;
              })}
            </ul> */}
            <hr />
            <button onClick={onSave}>Save</button>
            <button onClick={onLoad}>Load</button>
          </div>

          <div className="row">
            {pokemons?.results && (
              pokemons?.results.map((pokemon) => {
                return <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} onclick={onPokemonClick}/>
              })
            )}
          </div>
        </div>
        ) : (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <span onClick={onBackClick}><i className="fa-solid fa-arrow-left"></i> Volver</span>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </>
  );
}

export default App;






