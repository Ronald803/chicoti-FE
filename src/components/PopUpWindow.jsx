import React, { useContext, useState } from 'react'
import LoginForm from  './forms/LoginForm';
import CreateUserForm from './forms/CreateUserForm';
import { GeneralContext } from '../modules/context/GeneralContext';
import PrimaryButton from './atoms/PrimaryButton';
import ButtonForm from './atoms/ButtonForm';


function PopUpWindow(props) {
    const { isLogged,setIsLogged,userName,setUserName } = useContext(GeneralContext)
    const closeWindow = props.closeWindow
    const [createAccount, setCreateAccount] = useState(false);
    const toggleCreateAccount = () => {setCreateAccount(!createAccount) }
    const logOut = () => {
        setIsLogged(false)
        setUserName("")
        closeWindow()
    }
  return (
    <div className='flex justify-center'>
        <div className='m-4  w-80 rounded-lg '>
            <div className='p-4 bg-white border-2 border-tertiary rounded-lg'>
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
                    <div>
                        <CreateUserForm/>
                        <hr className=''/>
                        <ButtonForm buttonText='Ya tengo una cuenta' onClick={toggleCreateAccount} bg='bg-secondary'/>
                    </div>
                    :
                    <div>
                        <LoginForm closePopWindow={closeWindow}/>
                        <hr className=''/>
                        <ButtonForm buttonText='No tengo cuenta' onClick={toggleCreateAccount} bg='bg-secondary'/>
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