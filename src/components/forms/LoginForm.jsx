import React from 'react';
import { loginBackendRequest } from '../../requests/userRequests';
import successAlert from '../../alerts/successAlert';
import errorAlert from '../../alerts/errorAlert';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
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
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Contraseña</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Iniciar Sesión</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm