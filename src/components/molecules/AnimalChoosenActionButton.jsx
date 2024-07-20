import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import ButtonForm from '../atoms/ButtonForm'

function AnimalChoosenActionButton() {
    const {animalChoosen} = useContext(GeneralContext)
    let buttonName = ''
    if(animalChoosen?.characteristic == 'perdido'){
        buttonName = `Encontré a ${animalChoosen?.petName}`
    } else if(animalChoosen?.characteristic == 'encontrado') {
        buttonName = `Conozco donde vive ${animalChoosen?.petName}`
    } else if(animalChoosen?.characteristic == 'sin-hogar'){
        buttonName = `Me gustaría adoptar a ${animalChoosen?.petName}`
    }
    const handleAction = () => {
        console.log(buttonName)
    }
  return (
    <div className='bg-tertiary flex justify-center'>
        <div className='w-2/3'>
            <ButtonForm buttonText={buttonName} onClick={handleAction} bg='bg-primary' />
        </div>
    </div>
)
}

export default AnimalChoosenActionButton