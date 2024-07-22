import React from 'react'

function OneLineLabelInput(props) {
  return (
    <div className='flex'>
        <label className='w-1/3' htmlFor={props.id}>{props.name}</label>
        <input 
            type={props.type}
            id={props.id}
            name={props.id}
            onChange={props.handleChange}
            className='w-2/3 rounded-lg border border-tertiary'
        />
    </div>
  )
}

export default OneLineLabelInput