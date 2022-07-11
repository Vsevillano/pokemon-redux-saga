import React from 'react'

export const Pokemon = ({name, url}) => {

  const number = url.split('/');

  return (
  <div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3 px-2'>
    <div className="card h-100">
      <img className="card-img-top mt-2" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number[6]}.svg`} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center text-uppercase">{name}</h5>
      </div>
    </div>
  </div>
  )
}
