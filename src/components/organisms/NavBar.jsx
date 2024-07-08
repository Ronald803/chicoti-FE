import React from 'react'

function NavBar() {
  return (
    <div className='w-full'>
			<div className='flex flex-row justify-center'>
				<div className='w-36'>
					<a href='/'>
						<img className='w-full' src='./logo-chicoti.png'/>
					</a>
				</div>
			</div>
			<div className='flex flex-row bg-primary py-1'>
				<div className='w-1/3 text-center text-white'><a href='/missing'>Perdidos</a></div>
				<div className='w-1/3 text-center text-white'><a href='/found'>Encontrados</a></div>
				<div className='w-1/3 text-center text-white'><a href='/homeless'>Sin Hogar</a></div>
			</div>
		</div>
  )
}

export default NavBar