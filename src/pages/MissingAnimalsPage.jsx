import React from 'react'
import CreateAnimalForm from '../components/forms/CreateAnimalForm'
import Seeker from '../components/Seeker'

function MissingAnimalsPage() {
  return (
    <div>
        <div className='text-center pt-2 font-extrabold text-xl'>
          <h1>PERDIDOS</h1>
        </div>
        <div>
          <Seeker characteristicPet={'perdido'}/>
        </div>
        <div className='flex items-center justify-center'>
          <div className='m-2 border-2 border-black rounded-lg w-96'>
            <h4 className='text-center font-bold bg-secondary py-2 text-white'>Te ayudamos a encontrar a tu peque</h4>
            <h4 className='px-4 pt-2'>Llena el siguiente formulario</h4>
            <CreateAnimalForm fatherData={'perdido'}/>
          </div>
        </div>
    </div>
  )
}

export default MissingAnimalsPage