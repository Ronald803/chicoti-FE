import React from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'

function NavBar() {
  return (
    <div className='w-full'>
		<LogoBar/>
		<OptionsBar/>
	</div>
  )
}

export default NavBar