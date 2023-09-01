import React from 'react'

function Footer() {
  return (
    
        <footer class="bg-white shadow dark:bg-gray-900 ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">chicoti</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/missing" class="mr-4 hover:underline md:mr-6 ">Perdidos</a>
                        </li>
                        <li>
                            <a href="/found" class="mr-4 hover:underline md:mr-6">Encontrados</a>
                        </li>
                        <li>
                            <a href="/homeless" class="mr-4 hover:underline md:mr-6 ">Sin Hogar</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Comunicarse a +591 72592124</span>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Todos los derechos Reservados</span>
            </div>
        </footer>
    
  )
}

export default Footer