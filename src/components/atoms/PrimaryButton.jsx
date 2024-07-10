import React from 'react'

function PrimaryButton(props) {
    const handleClick = () => {
        props.onClick()
    }
  return (
    <button 
        className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black' 
        onClick={handleClick}
    >
        {props.buttonText}
    </button>
    )
}

export default PrimaryButton