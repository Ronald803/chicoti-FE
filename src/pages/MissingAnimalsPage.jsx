import React from 'react'
import CreateAnimalForm from '../components/forms/CreateAnimalForm'

function MissingAnimalsPage() {
  return (
    <div>
        <div className='text-center pt-2 font-extrabold text-xl'>
          <h1>PERDIDOS</h1>
        </div>
        <div>
          
        </div>
        <div className='m-2 p-2 border-2 border-black rounded-lg'>
          <h4 className='text-center font-bold'>Te ayudamos a encontrar a tu peque</h4>
          <h4 className='ps-2 my-1'>Llena el siguiente formulario</h4>
          <CreateAnimalForm fatherData={'perdido'}/>
        </div>
    </div>
  )
}

export default MissingAnimalsPage
// https://www.labnol.org/embed/google/drive/