import React from 'react'
import { postNewUserBackend } from '../../requests/userRequests'

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
            })
            .catch(e=>{console.log(e)})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label  htmlFor='name'>Nombre</label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='cellphone'>Celular</label>
                <input 
                    type='number'
                    id='cellphone'
                    name='cellphone'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='email'>Correo Electrónico</label>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='email'>Contraseña</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                />
            </div>

            <div>
                <button>Registrarse</button>
            </div>
        </form>
    </div>
  )
}

export default CreateUserForm