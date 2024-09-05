import React from 'react'

function OneLineLabelSelect(props) {
  return (
<div className='flex pt-2'>
    <label 
      className='w-1/3' 
      htmlFor={props.id}
    >
      {props.name}
    </label>
    <select 
      className='w-2/3 rounded-lg border border-tertiary' 
      name={props.id}
      id={props.id}
      onChange={props.handleChange}
    >
      <option value="">Elige una opción</option>
      {props.options.map((option,index)=>(
        <option value={option.value} key={index}>{option.name}</option>
      ))}
    </select>
</div>
  )
}

export default OneLineLabelSelect