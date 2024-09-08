import React from 'react'
import { postNewUserBackend } from '../../requests/userRequests'
import successAlert from '../../alerts/successAlert'
import errorAlert from '../../alerts/errorAlert'
import SingleLabelAndInput from '../molecules/SingleLabelAndInput'
import ButtonForm from '../atoms/ButtonForm'
import { useNavigate } from 'react-router-dom'

function CreateUserForm() {
    const navigate = useNavigate();
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
                console.log(answer);
                localStorage.setItem('n',answer.data.body.name);
                localStorage.setItem('t',answer.data.body.token);
                localStorage.setItem('r',answer.data.body.rol);
                localStorage.setItem('e',answer.data.body.email);
                successAlert('Bienvenid@ ' + answer.data.body.name)
                setTimeout(() => {
                    navigate('/missing')
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