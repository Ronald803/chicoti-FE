import React from 'react'

function NavBar() {
  return (
    <div className='w-full'>
			<div className='flex flex-row justify-center'>
				<div className='w-36'>
					<img className='w-full' src='./logo-chicoti.png'/>
				</div>
			</div>
			<div className='flex flex-row bg-primary'>
				<div className='w-1/3 text-center text-white'><a href='/missing'>Perdidos</a></div>
				<div className='w-1/3 text-center text-white'><a href='/found'>Encontrados</a></div>
				<div className='w-1/3 text-center text-white'><a href='/homeless'>Sin Hogar</a></div>
			</div>
		</div>
  )
}

export default NavBar