import React, { useState, useEffect } from 'react'
import ButtonForm from '../atoms/ButtonForm'
import { useNavigate } from 'react-router-dom'
import { notificateAnimalOwner } from '../../requests/animalRequests'
import successAlert from '../../alerts/successAlert'
import buttonAlert from '../../alerts/buttonAlert'

function ActionButton({animalChoosen}) {
    const [buttonText, setButtonText] = useState('')
    useEffect(()=>{
        if(animalChoosen?.characteristic == 'missing'){
            setButtonText(`Encontré a ${animalChoosen?.petName}`)
        } else if(animalChoosen?.characteristic == 'found') {
            setButtonText(`Conozco donde vive ${animalChoosen?.petName}`)
        } else if(animalChoosen?.characteristic == 'homeless'){
            setButtonText(`Adoptar a ${animalChoosen?.petName}`)
        }
    },[animalChoosen])

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
    <div className='w-full flex justify-center bg-tertiary'>
            <div className='w-2/3'>
                <ButtonForm buttonText={buttonText} onClick={handleAction} bg='bg-primary' />
            </div>
    </div>
)
}

export default ActionButton