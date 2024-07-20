import React from 'react'

function LogoBar(props) {
  return (
    <div className={'flex flex-row justify-center '+props.bg}>
		<div className='w-44'>
			<a href='/'>
				<img className='w-full' src='./logo-chicoti.png' style={props.st} />
			</a>
		</div>
	</div>
  )
}

export default LogoBar