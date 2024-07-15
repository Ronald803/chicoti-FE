import React, { useContext, useState } from 'react'
import LoginForm from  './forms/LoginForm';
import CreateUserForm from './forms/CreateUserForm';
import { GeneralContext } from '../modules/context/GeneralContext';
import PrimaryButton from './atoms/PrimaryButton';


function PopUpWindow(props) {
    const { isLogged,setIsLogged,userName,setUserName } = useContext(GeneralContext)
    const closeWindow = props.closeWindow
    const [createAccount, setCreateAccount] = useState(false);
    const clickCreateAccount = () => {setCreateAccount(true) }
    const logOut = () => {
        setIsLogged(false)
        setUserName("")
        closeWindow()
    }
  return (
    <div className=''>
        <div className='m-4  w-80 rounded-lg '>
            <div className='p-3 rounded-t-lg text-end bg-tertiary'>
                <button onClick={closeWindow} className=' bg-primary py-1 px-3 rounded-lg text-white hover:bg-fourth hover:text-black'>X</button>
            </div>
            <div className='p-4 bg-white border-2 border-b-tertiary border-x-tertiary rounded-b-lg'>
            {
                isLogged
                ?
                <div>
                    {userName}
                    <PrimaryButton buttonText="Cerrar sesión" onClick={logOut} />
                </div>
                :
                <div>
                {
                    createAccount
                    ?
                    <CreateUserForm/>
                    :
                    <div>
                        <LoginForm closePopWindow={closeWindow}/>
                        <hr className='py-1'/>
                        <div className='text-center'>
                            <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black' onClick={clickCreateAccount}>Crear Cuenta</button>
                        </div>
                    </div>
                }
                </div>
            }
            
            </div>
            
        </div>
    </div>
  )
}

export default PopUpWindow