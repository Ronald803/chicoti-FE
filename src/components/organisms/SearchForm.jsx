import React from 'react'
import OneLineLabelSelectRef from '../molecules/OneLineLabelSelectRef'
import optionsArrays from '../../modules/optionsArrays'

function SearchForm(props) {
  return (
    <div className='w-full bg-tertiary mb-2'>
      <div className='text-center py-2'>
        Busca en nuestra base de datos 🔎
      </div>
      <form onSubmit={props.handleSubmit} className='w-80 m-auto px-2'>
        <OneLineLabelSelectRef
          id='species'
          name='Especie'
          selectRef={props.speciesRef}
          options={optionsArrays.species}
        />
        <OneLineLabelSelectRef
          id='gender'
          name='Género'
          selectRef={props.genderRef}
          options={optionsArrays.genders}
        />
        <OneLineLabelSelectRef
          id='characteristic'
          name='Situación'
          selectRef={props.characteristicRef}
          options={optionsArrays.characteristics}
        />
        <div className='py-2 text-center'>
          <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
