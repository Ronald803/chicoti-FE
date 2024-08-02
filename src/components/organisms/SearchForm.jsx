import React from 'react'
import OneLineLabelInput from '../molecules/OneLineLabelInput'
import OneLineLabelSelect from '../molecules/OneLineLabelSelect'

function SearchForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='w-96 m-auto'>
      <OneLineLabelSelect 
        id='species' 
        name='Especie' 
        handleChange={props.handleChange}
        options={[{value:'dog',name:'Perro'},{value:'cat',name:'Gato'},{value:'other',name:'Otro'}]}
      />
      <OneLineLabelSelect 
        id='gender' 
        name='Género' 
        handleChange={props.handleChange}
        options={[{value:'machito',name:'Machito'},{value:'hembrita',name:'Hembrita'}]}
      />
      <OneLineLabelSelect 
        id='characteristic' 
        name='Situación' 
        handleChange={props.handleChange}
        options={[{value:'perdido',name:'Perdid@'},{value:'encontrado',name:'Encontrad@'},{value:'sin-hogar',name:'En adopción'}]}
      />
      <div className='py-2 text-center'>
        <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border'>Buscar</button>
      </div>
    </form>
  )
}

export default SearchForm
