import React from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'
import optionsArrays from '../../modules/optionsArrays'

function NavBar() {
  return (
  <div className='w-full'>
		<LogoBar bg={''} st={{}} />
		<OptionsBar options={optionsArrays.navbar}/>
	</div>
  )
}

export default NavBar