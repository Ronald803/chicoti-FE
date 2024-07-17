import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleOptionBar from '../atoms/SingleOptionBar'

function OptionsBar(props) {
    const location = useLocation()
  return (
    <div className='flex flex-row bg-primary text-sm py-1'>
      {
        props.options.map((option,index)=>{
          return (
            <SingleOptionBar currentPath={location.pathname} optionName={option.optionName} optionPath={option.optionPath} key={index} />
          )
        })
      }
	</div>
  )
}

export default OptionsBar