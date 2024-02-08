import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PopUpWindow from './PopUpWindow';
import infoAlert from '../alerts/infoAlert';

function Navbar() {
  useEffect(()=>{
    let first = sessionStorage.getItem("first")
    if(first!="true"){
      infoAlert("Información","Te sugerimos que inicies sesión o te crees una cuenta, es fácil te tomará unos segundos");
      sessionStorage.setItem("first","true");
    }

  },[])
  
  const [userWindow, setUserWindow] = useState(false);
  let aux = false;
  const [navBarCollapsed, setNavBarCollapsed] = useState("hidden w-full md:block md:w-auto")
  const navigate = useNavigate();
  const logOut = ()=>{
    sessionStorage.setItem('t',"");
    sessionStorage.setItem('n',"");
    sessionStorage.setItem('r',"");
    sessionStorage.setItem('c',"");
    setTimeout(() => {
      navigate('/')
    }, 1500); 
  }
  const openPopUpWindow = () => { setUserWindow(!userWindow)}
  const closePopUpWindow = () => { setUserWindow(false)}
  const deployNavBar = () => { 
    if(navBarCollapsed==="hidden w-full md:block md:w-auto"){
      setNavBarCollapsed("w-full md:block md:w-auto") 
    } else {
      setNavBarCollapsed("hidden w-full md:block md:w-auto") 
    }
  }
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-secondary">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">chicoti</span>
            </a>
            <button onClick={deployNavBar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={navBarCollapsed} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary dark:border-gray-700">
                <li>
                  <a href="/missing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Perdidos</a>
                </li>
                <li>
                  <a href="/found" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Encontrados</a>
                </li>
                <li>
                  <a href="/homeless" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sin Hogar</a>
                </li>
                {
                  sessionStorage.getItem('r') == "admin"
                  &&
                  <li>
                    <a href="/urlImage" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Arreglar URL</a>
                  </li>
                }
                {
                  sessionStorage.getItem('t') !== ""
                  ?
                  <li>
                    <a href="/" onClick={logOut} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cerrar Sesión</a>
                  </li>
                  :
                  <div className='flex'>
                    <li>
                      <button onClick={openPopUpWindow} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar Sesión</button>
                    </li>    
                  </div>
                }
              </ul>
            </div>
          </div>
        </nav>        
        {
          userWindow == true && <PopUpWindow closeWindow={closePopUpWindow}/>
        }
    </div>
  )
}

export default Navbar