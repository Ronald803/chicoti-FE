import React from 'react'
import CreateAnimalForm from '../components/CreateAnimalForm'

function MissingAnimalsPage() {
  return (
    <div>
        <div className='text-center pt-2 font-extrabold text-xl'>
          <h1>PERDIDOS</h1>
        </div>
        <div className='m-2 p-2 border-2 border-black rounded-lg'>
          <h4 className='text-center font-bold'>Te ayudamos a encontrarlo</h4>
          <h4>Llena el siguiente formulario</h4>
          <CreateAnimalForm/>
        </div>
    </div>
  )
}

export default MissingAnimalsPage