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
            <div className='pt-2'>
                <div className='ps-2'><label  htmlFor='name'>Nombre</label></div>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    className='my-1 py-1 w-full rounded-lg border border-tertiary'
                />
            </div>
            <div className='pt-2'>
                <div className='ps-2'><label  htmlFor='cellphone'>Celular</label></div>
                <input 
                    type='number'
                    id='cellphone'
                    name='cellphone'
                    onChange={handleChange}
                    className='my-1 py-1 w-full rounded-lg border border-tertiary'
                />
            </div>
            <div className='pt-2'>
                <div className='ps-2'><label  htmlFor='email'>Correo Electrónico</label></div>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    className='my-1 py-1 w-full rounded-lg border border-tertiary'
                />
            </div>
            <div className='pt-2'>
                <div className='ps-2'><label  htmlFor='email'>Contraseña</label></div>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    className='my-1 py-1 w-full rounded-lg border border-tertiary'
                />
            </div>

            <div className='text-center py-2'>
                <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Registrarse</button>
            </div>
        </form>
    </div>
  )
}

export default CreateUserForm