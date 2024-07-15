import React from 'react'

function SearchForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='w-96 m-auto'>
      <div className='pt-2 flex'>
        <div className='w-1/5 ps-2 text-white' ><label className='' htmlFor='species'>Especie</label></div>
        <input
            type='species'
            id='species'
            name='species'
            onChange={props.handleChange}
            className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
        />
      </div>
      <div className='pt-2 flex'>
        <div className='w-1/5 ps-2 text-white'><label className='' htmlFor='gender'>Género</label></div>
        <input
            type='gender'
            id='gender'
            name='gender'
            onChange={props.handleChange}
            className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
        />
      </div>
      <div className='pt-2 flex'>
        <div className='w-1/5 ps-2 text-white'><label className='w-full' htmlFor='breed'>Raza</label></div>
        <input
            type='breed'
            id='breed'
            name='breed'
            onChange={props.handleChange}
            className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
        />
      </div>
      <div className='py-2 text-center'>
        <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border'>Buscar</button>
      </div>
    </form>
  )
}

export default SearchForm