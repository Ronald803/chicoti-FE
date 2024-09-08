import React from 'react'

function SecondaryButton(props) {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <div className='w-full px-3 my-1.5'>
      <button
        className='w-full py-0.5 rounded-lg bg-secondary text-white text-sm hover:bg-fourth hover:text-black'
        onClick={handleClick}
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default SecondaryButton