import React from 'react'

function SingleOptionBar(props) {
    const choosenTagStyle = "bg-tertiary text-gray-800 px-1 "
  return (
    <div className='w-1/3 text-center text-white'>
		<a 
            className={props.currentPath==props.optionPath?choosenTagStyle:""} 
            href={props.optionPath}
        >
			{props.optionName}
		</a>
	</div>
  )
}

export default SingleOptionBar