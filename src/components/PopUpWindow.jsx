import React, { useState } from 'react'
import LoginForm from  './forms/LoginForm';
import CreateUserForm from './forms/CreateUserForm';


function PopUpWindow(props) {
    const closeWindow = props.closeWindow
    const [createAccount, setCreateAccount] = useState(false);
    const clickCreateAccount = () => {setCreateAccount(true) }
  return (
    <div className='flex items-center justify-center fixed top-0 left-0 z-50 w-screen h-screen'>
        <div className='m-4  w-80 rounded-lg '>
            <div className='p-3 rounded-t-lg text-end bg-tertiary'>
                <button onClick={closeWindow} className=' bg-primary py-1 px-3 rounded-lg text-white hover:bg-fourth hover:text-black'>X</button>
            </div>
            <div className='p-4 bg-white border-2 border-b-tertiary border-x-tertiary rounded-b-lg'>
            {
                createAccount
                ?
                <CreateUserForm/>
                :
                <div>
                    <LoginForm/>
                    <hr className='py-1'/>
                    <div className='text-center'>
                        <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black' onClick={clickCreateAccount}>Crear Cuenta</button>
                    </div>
                </div>
            }
            </div>
            
        </div>
    </div>
  )
}

export default PopUpWindow