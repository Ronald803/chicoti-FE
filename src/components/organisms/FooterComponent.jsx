import React, { useState } from 'react'
import PopUpWindow from '../PopUpWindow'

function FooterComponent() {
  const [isUserWindowOpen, setIsUserWindowOpen] = useState(false)
  const closePopUpWindow = () => {setIsUserWindowOpen(false)}
  const openPopUpWindow = () => {setIsUserWindowOpen(!isUserWindowOpen)}
  return (
    <div className='bg-primary py-1'>
      {
        isUserWindowOpen && <PopUpWindow closeWindow={closePopUpWindow}/>
      }
      <div className='flex flex-row pb-1'>
        <div className='w-1/2 text-center'>
          <button>🔎</button>
        </div>
        <div className='w-1/2 text-center'>
          <button onClick={openPopUpWindow}>👤</button>
        </div>
      </div>
      <hr/>
      <div className='text-white text-center text-sm'>trata a los animales como te gustaría ser tratado</div>
    </div>
  )
}

export default FooterComponent