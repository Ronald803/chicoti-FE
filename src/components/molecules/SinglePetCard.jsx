import React from 'react'

function SinglePetCard(props) {
  return (
    <div className='w-full text-center rounded-sm' onClick={()=>{props.togglePopCard(props.pet)}}>
        <div className='w-full h-64 flex justify-center bg-tertiary rounded-sm'>
            <img 
                className='h-full object-cover' 
                src={props.pet.photoUrlOfficial}
            />
        </div>
        <div className=' w-auto text-center bg-primary text-white text-xs py-2 rounded-b-sm'>
            {props.pet.petName}
        </div>
    </div>
  )
}

export default SinglePetCard