import React from 'react'
import { postNewUserBackend } from '../../requests/userRequests'
import successAlert from '../../alerts/successAlert'
import errorAlert from '../../alerts/errorAlert'
import SingleLabelAndInput from '../molecules/SingleLabelAndInput'
import ButtonForm from '../atoms/ButtonForm'

function CreateUserForm() {
    const newUser = {
        name: "",
        cellphone: "",
        email: "",
        password: ""
    }
    const handleChange = (e)=>{
        newUser[e.target.name] = e.target.value
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(newUser);
        postNewUserBackend(newUser)
            .then(answer=>{
                sessionStorage.setItem('n',answer.data.name);
                sessionStorage.setItem('t',answer.data.token);
                sessionStorage.setItem('r',answer.data.rol);
                successAlert('Bienvenid@ ' + answer.data.body.name)
                setTimeout(() => {
                    closePopWindow();
                    navigate('/')
                }, 2500);
            })
            .catch(e=>{
                errorAlert(e.response.data.error)
                setTimeout(() => {
                    window.location.reload()  
                }, 2500);
            })
    }
  return (
    <div>
        <SingleLabelAndInput handleChange={handleChange} type='text' id='name' name='Nombre'/>
        <SingleLabelAndInput handleChange={handleChange} type='number' id='cellphone' name='Celular'/>
        <SingleLabelAndInput handleChange={handleChange} type='text' id='email' name='Correo Electrónico'/>
        <SingleLabelAndInput handleChange={handleChange} type='password' id='password' name='Contraseña'/>
        <ButtonForm buttonText='Crear Cuenta' onClick={handleSubmit} bg='bg-primary'/>
    </div>
  )
}

export default CreateUserForm