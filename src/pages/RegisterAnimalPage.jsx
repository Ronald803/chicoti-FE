import React, { useEffect } from 'react'
import CreateAnimalForm from '../components/forms/CreateAnimalForm'
import buttonAlert from '../alerts/buttonAlert'
import { useNavigate } from 'react-router-dom'

function RegisterAnimalPage() {
  const navigate = useNavigate()
  const goUserPage = () => {
    navigate('/user')
  }
  useEffect(()=>{
    const token = localStorage.getItem('t') || { length: 0 }
    if(token.length<2){
      buttonAlert({
        title:'No iniciaste sesión',
        message:'Inicia sesión para continuar o create una cuenta',
        next: goUserPage
      })
    }
  },[])
  return (
    <div>
        <CreateAnimalForm/>
    </div>
  )
}

export default RegisterAnimalPage