import React from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'

function NavBar() {
  const options = [
    {
      optionName: "Perdidos",
      optionPath: "/missing"
    },
    {
      optionName: "Encontrados",
      optionPath: "/found"
    },
    {
      optionName: "Sin Hogar",
      optionPath: "/homeless"
    }
  ]
  return (
  <div className='w-full'>
		<LogoBar bg={''} st={{}} />
		<OptionsBar options={options}/>
	</div>
  )
}

export default NavBar