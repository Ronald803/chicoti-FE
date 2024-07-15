import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleOptionBar from '../atoms/SingleOptionBar'

function OptionsBar() {
    const location = useLocation()
    const choosenTagStyle = "bg-tertiary text-gray-800 px-1 "
  return (
    <div className='flex flex-row bg-primary text-sm py-1'>
		<SingleOptionBar currentPath={location.pathname} optionName="Perdidos" optionPath="/missing"/>
		<SingleOptionBar currentPath={location.pathname} optionName="Encontrados" optionPath="/found"/>
		<SingleOptionBar currentPath={location.pathname} optionName="Sin Hogar" optionPath="/homeless"/>
	</div>
  )
}

export default OptionsBar