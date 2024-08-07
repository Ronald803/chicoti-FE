import React, { useEffect, useState } from 'react'
import LoginForm from  './forms/LoginForm';
import CreateUserForm from './forms/CreateUserForm';
import PrimaryButton from './atoms/PrimaryButton';
import ButtonForm from './atoms/ButtonForm';


function PopUpWindow() {
    const [isLogged, setIsLogged] = useState(false)
    const [userName, setUserName] = useState(null)
    useEffect(()=>{
        const token = sessionStorage.getItem('t') || { length: 0 }
        const username = sessionStorage.getItem('n')
        if(token.length>0){
            setIsLogged(true)
            setUserName(username)
        }
    },[])
    const [createAccount, setCreateAccount] = useState(false);
    const toggleCreateAccount = () => {setCreateAccount(!createAccount) }
    const logOut = () => {
        setIsLogged(false)
        setUserName("")
        sessionStorage.setItem('n',"");
        sessionStorage.setItem('t',"");
        sessionStorage.setItem('r',"");
        sessionStorage.setItem('c',"");
    }
  return (
    <div className='flex justify-center'>
        <div className='m-4  w-80 rounded-lg '>
            <div className='p-4 bg-white border-2 border-tertiary rounded-lg'>
            {
                isLogged
                ?
                <div className='text-center'>
                    <div className='py-2'>{userName}</div>
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
                        <LoginForm/>
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