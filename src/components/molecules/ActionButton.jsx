import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import ButtonForm from '../atoms/ButtonForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { notificateAnimalOwner } from '../../requests/animalRequests'
import successAlert from '../../alerts/successAlert'
import buttonAlert from '../../alerts/buttonAlert'

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
    const notificate = async () => {
        const answer = await notificateAnimalOwner(animalChoosen)
        if(answer.status == 200){
            successAlert('Se notificó a las personas a cargo del peludito. Muchas gracias...')
        }
    }
    const handleAction = () => {
        if(animalChoosen){
            buttonAlert({
                title:'Chicoti',
                message:'Se notificará a las personas a cargo del peludit@ para que se contacten contigo',
                next: notificate
            })
        }else{
            navigate('/registerpet')
        }
    }
  return (
    <div className='w-full flex justify-center absolute  -top-12'>
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