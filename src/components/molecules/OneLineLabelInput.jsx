import React from 'react'

function OneLineLabelInput(props) {
  return (
    <div className='flex pt-2'>
        <label className='w-1/3' htmlFor={props.id}>{props.name}</label>
        <input 
            type={props.type}
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            className='w-2/3 rounded-lg border border-tertiary px-1'
        />
    </div>
  )
}

export default OneLineLabelInput