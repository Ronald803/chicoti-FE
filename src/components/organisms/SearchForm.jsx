import React from 'react'
import OneLineLabelSelectRef from '../molecules/OneLineLabelSelectRef'

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
        options={[{value:'dog',name:'Perro'},{value:'cat',name:'Gato'},{value:'other',name:'Otro'}]}
      />
      <OneLineLabelSelectRef
        id='gender' 
        name='Género' 
        selectRef={props.genderRef}
        options={[{value:'machito',name:'Machito'},{value:'hembrita',name:'Hembrita'}]}
      />
      <OneLineLabelSelectRef
        id='characteristic' 
        name='Situación' 
        selectRef={props.characteristicRef}
        options={[{value:'perdido',name:'Perdid@'},{value:'encontrado',name:'Encontrad@'},{value:'sin-hogar',name:'En adopción'}]}
      />
      <div className='py-2 text-center'>
        <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border'>Buscar</button>
      </div>
    </form>
</div>
  )
}

export default SearchForm
