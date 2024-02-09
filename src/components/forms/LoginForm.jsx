import React from 'react';
import { loginBackendRequest } from '../../requests/userRequests';
import successAlert from '../../alerts/successAlert';
import errorAlert from '../../alerts/errorAlert';
import { useNavigate } from 'react-router-dom';


function LoginForm(props) {
    const closePopWindow = props.closePopWindow
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
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div className='pt-2'>
                <div><label className='ps-2' htmlFor='email'>Email</label></div>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    className='my-1 p-1 w-full rounded-lg border border-tertiary'
                />
            </div>
            <div className='pt-2'>
                <div><label className='ps-2' htmlFor='password'>Contraseña</label></div>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    className='my-1 p-1 w-full rounded-lg border-tertiary border'
                />
            </div>
            <div className='py-2 text-center'>
                <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Iniciar Sesión</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm