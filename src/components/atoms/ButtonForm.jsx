import React from 'react'

function ButtonForm(props) {
  return (
    <div className='text-center py-2 w-full text-sm'>
        <button 
            className={'py-2 px-8 rounded-lg text-white hover:bg-fourth hover:text-black w-full border border-white '+props.bg}
            onClick={props.onClick}
        >
            {props.buttonText}
        </button>
    </div>
  )
}

export default ButtonForm