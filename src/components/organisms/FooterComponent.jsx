import React, { useState } from 'react'
import PopUpWindow from '../PopUpWindow'

function FooterComponent() {
  const [isUserWindowOpen, setIsUserWindowOpen] = useState(false)
  const closePopUpWindow = () => {setIsUserWindowOpen(false)}
  const openPopUpWindow = () => {setIsUserWindowOpen(!isUserWindowOpen)}
  return (
    <div className='bg-primary'>
      {
        isUserWindowOpen && <PopUpWindow closeWindow={closePopUpWindow}/>
      }
      <div className='flex flex-row'>
        <div className='w-1/2 text-center'>
          <button>🔎</button>
        </div>
        <div className='w-1/2 text-center'>
          <button onClick={openPopUpWindow}>👤</button>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent