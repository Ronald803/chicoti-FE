import React from 'react'
import { loginBackendRequest } from '../../requests/userRequests'

function LoginForm() {
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
                sessionStorage.setItem('n',answer.data.name);
                sessionStorage.setItem('t',answer.data.token);
                sessionStorage.setItem('r',answer.data.rol);
                sessionStorage.setItem('c',answer.data.cellphone);
                setTimeout(() => {
                    window.location.reload()  
                  }, 2500);
            })
            .catch(e=>{console.log(e)})
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