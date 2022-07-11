import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, loadNotes, saveNotes } from "./actions/actions";
import { NewNoteInput } from "./components/NewNoteInput";
import { loadPokemons } from "./actions/pokemon_actions";
import { Pokemon } from "./components/Pokemon";
import './index.css'

function App() {
  const notes = useSelector((state) => state.notes);
  const pokemons = useSelector((state) => state.pokemons);

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
        <div className='container-fluid px-0'> 
          <div className="row">
          {pokemons?.results && (
            pokemons?.results.map((pokemon) => {
              return <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            })
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
