import React from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'

function FooterComponent() {
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
    <div className=''>
      <OptionsBar options={options}  />
      <hr className='pt-1'/>
      <div className= 'bg-primary text-white text-center text-sm py-5'>
        El amor no se puede comprar pero si se puede adoptar...
      </div>
      <LogoBar/>
    </div>
  )
}

export default FooterComponent