import React, { useContext } from 'react';
import { loginBackendRequest } from '../../requests/userRequests';
import successAlert from '../../alerts/successAlert';
import errorAlert from '../../alerts/errorAlert';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../../modules/context/GeneralContext';
import SingleLabelAndInput from '../molecules/SingleLabelAndInput';
import ButtonForm from '../atoms/ButtonForm';


function LoginForm() {
    const {setIsLogged,setUserName} = useContext(GeneralContext)
    const navigate = useNavigate();
    const user = {
        email: '',
        password: ''
    }
    const handleChange = (e)=>{
        user[e.target.name] = e.target.value
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        loginBackendRequest(user)
            .then(answer=>{
                sessionStorage.setItem('n',answer.data.body.name);
                sessionStorage.setItem('t',answer.data.body.token);
                sessionStorage.setItem('r',answer.data.body.rol);
                sessionStorage.setItem('c',answer.data.body.cellphone);
                successAlert('Bienvenid@ ' + answer.data.body.name)
                setIsLogged(true)
                setUserName(answer.data.body.name)
                setTimeout(() => {
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
    <div className=''>
        <SingleLabelAndInput handleChange={handleChange} type='email' id='email' name='Correo Electrónico'/>
        <SingleLabelAndInput handleChange={handleChange} type='password' id='password' name='Contraseña'/>
        <ButtonForm buttonText='Iniciar sesión' onClick={handleSubmit} bg='bg-primary'/>
    </div>
  )
}

export default LoginForm