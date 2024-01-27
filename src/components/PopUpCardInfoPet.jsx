import React from 'react'

function PopUpCardInfoPet(props) {
    const toggleCard = props.toggleCard;
    const petInfo = props.petInfo;
    const closePopUpCard = ()=>{
        console.log(petInfo);
        toggleCard()
    }
  return (
    <div>
        <div className='flex items-center justify-center fixed top-0 left-0 z-50 w-screen h-screen'>
        <div className='m-4  w-80 rounded-lg '>
            <div className='p-3 rounded-t-lg text-end bg-tertiary'>
                <button onClick={closePopUpCard} className=' bg-primary py-1 px-3 rounded-lg text-white hover:bg-fourth hover:text-black'>X</button>
            </div>
            <div className='p-4 bg-white border-2 border-b-tertiary border-x-tertiary rounded-b-lg'>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default PopUpCardInfoPet