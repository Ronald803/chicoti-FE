import React from 'react'
import CreateAnimalForm from '../components/forms/CreateAnimalForm'

function FoundAnimalsPage() {
  return (
    <div className=''>
        <div className='text-center pt-2 font-extrabold text-xl'>
          <h1>ENCONTRADOS</h1>
        </div>
        <div className='flex items-center justify-center'>
          <div className='m-2 border-2 border-black rounded-lg w-96 '>
            <h4 className='text-center font-bold bg-secondary py-2 text-white'>Te ayudamos a encontrar a su familia</h4>
            <h4 className='px-2'>Llena el siguiente formulario</h4>
            <CreateAnimalForm fatherData={'encontrado'}/>
          </div>
        </div>
    </div>
  )
}

export default FoundAnimalsPage