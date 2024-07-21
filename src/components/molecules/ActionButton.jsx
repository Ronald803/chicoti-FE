import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import ButtonForm from '../atoms/ButtonForm'
import { useLocation, useNavigate } from 'react-router-dom'

function ActionButton() {
    const {animalChoosen,isAnimalChoosen} = useContext(GeneralContext)
    const location = useLocation()
    let buttonName = ''
    if(location.pathname=='/missing' && !isAnimalChoosen){
        buttonName = 'Publicar perdid@'
    } else if(location.pathname=='/found' && !isAnimalChoosen){
        buttonName = 'Publicar encontrado'
    } else if(location.pathname=='/homeless' && !isAnimalChoosen){
        buttonName = 'Publicar en adopción'
    } else if(animalChoosen?.characteristic == 'perdido'){
        buttonName = `Encontré a ${animalChoosen?.petName}`
    } else if(animalChoosen?.characteristic == 'encontrado') {
        buttonName = `Conozco donde vive ${animalChoosen?.petName}`
    } else if(animalChoosen?.characteristic == 'sin-hogar'){
        buttonName = `Adoptar a ${animalChoosen?.petName}`
    }
    const navigate = useNavigate()
    const handleAction = () => {
        if(animalChoosen){
            console.log(buttonName)
        }else{
            navigate('/registerpet')
        }
    }
  return (
    <div className='w-full flex justify-center absolute  -top-10'>
        {
            buttonName.length > 0
            &&
            <div className='w-2/3 fixed'>
                <ButtonForm buttonText={buttonName} onClick={handleAction} bg='bg-primary' />
            </div>
        }
    </div>
)
}

export default ActionButton