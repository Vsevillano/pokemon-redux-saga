import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemonInfo, loadPokemons } from "./actions/pokemon_actions";
import { Pokemon } from "./components/Pokemon";
import './index.css'

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonInfoAPI = useSelector((state) => state.pokemonInfo);

  const [pokemonInfo, setpokemonInfo] = useState(null);

  const dispatch = useDispatch();

  const onPokemonClick = () => {
    dispatch(loadPokemonInfo())
    setpokemonInfo(pokemonInfoAPI)
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
              <div className="col-12">
                {JSON.stringify(pokemonInfo)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;






