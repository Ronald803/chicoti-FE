import React from 'react'

function CreateUserForm() {
  return (
    <div>
        <form>
            <div>
                <label  htmlFor='name'>Nombre</label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    onChange
                />
            </div>
            <div>
                <label  htmlFor='cellphoneOne'>Celular 1</label>
                <input 
                    type='number'
                    id='cellphoneOne'
                    name='cellphoneOne'
                    onChange
                />
            </div>
            <div>
                <label  htmlFor='cellphoneTwo'>Celular 2</label>
                <input 
                    type='number'
                    id='cellphoneTwo'
                    name='cellphoneTwo'
                    onChange
                />
            </div>
            <div>
                <label  htmlFor='email'>Correo Electrónico</label>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    onChange
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