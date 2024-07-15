import React from 'react'

function LogoBar() {
  return (
    <div className='flex flex-row justify-center'>
		<div className='w-44'>
			<a href='/'>
				<img className='w-full' src='./logo-chicoti.png'/>
			</a>
		</div>
	</div>
  )
}

export default LogoBar