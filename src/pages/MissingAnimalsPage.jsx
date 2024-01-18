import React from 'react'
import CreateAnimalForm from '../components/forms/CreateAnimalForm'

function MissingAnimalsPage() {
  return (
    <div>
        <div className='text-center pt-2 font-extrabold text-xl'>
          <h1>PERDIDOS</h1>
        </div>
        <div>
          <img src="https://drive.usercontent.google.com/download?id=1Pg2vOTI5rV4c88owMnuMfjie69osz8oI&export=view&authuser=0"/>
          <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQLOiZonzgsm332HpIgcekbrmhQcDTkMT6QDgfkrDwXHruJQjqCwHSoBQj1ORSbOlxo7u8ny8J3JMcP6hbNMYQcj0_-=s1600"/>
        </div>
        <div className='m-2 p-2 border-2 border-black rounded-lg'>
          <h4 className='text-center font-bold'>Te ayudamos a encontrar a tu peque</h4>
          <h4>Llena el siguiente formulario</h4>
          <CreateAnimalForm fatherData={'perdido'}/>
        </div>
    </div>
  )
}

export default MissingAnimalsPage