import React, { useContext } from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'
import { GeneralContext } from '../../modules/context/GeneralContext'
import AnimalChoosenActionButton from '../molecules/AnimalChoosenActionButton'

function FooterComponent() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const options = [
    {
      optionName: "Buscar 🔎",
      optionPath: "/search"
    },
    {
      optionName: "Mi cuenta 👤",
      optionPath: "/user"
    },
    {
      optionName: "Nosotros",
      optionPath: "/aboutus"
    }
  ]
  return (
  <div>
    {
      isAnimalChoosen
      &&
      <AnimalChoosenActionButton/>
    }
    <div className='border-t-2'>
      <OptionsBar options={options}  />
      <hr className='pt-1'/>
      <div className= 'bg-primary text-white text-center text-sm py-2'>
        El amor no se puede comprar pero si se puede adoptar...
      </div>
      <LogoBar 
        bg={'bg-primary'} 
        st={{
              filter: "brightness(0) invert(1)"
            }} 
      />
    </div>
  </div>
  )
}

export default FooterComponent