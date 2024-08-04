import React, { useEffect, useState } from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'
import ActionButton from '../molecules/ActionButton'

function FooterComponent() {
  const [logged, setLogged] = useState(false)
  useEffect(()=>{
    const token = sessionStorage.getItem('t') || { length: 0 }
    if(token.length>2){
      setLogged(true)
    }
  },[])
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
  <div className='relative'>
    { logged && <ActionButton/> }
    <div className='border-t-2'>
      <OptionsBar options={options}  />
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