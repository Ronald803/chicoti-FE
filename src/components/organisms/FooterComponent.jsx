import React, { useEffect, useState } from 'react'
import OptionsBar from '../molecules/OptionsBar'
import LogoBar from '../molecules/LogoBar'
import ActionButton from '../molecules/ActionButton'
import optionsArrays from '../../modules/optionsArrays'

function FooterComponent() {
  const [logged, setLogged] = useState(false)
  useEffect(()=>{
    const token = sessionStorage.getItem('t') || { length: 0 }
    if(token.length>2){
      setLogged(true)
    }
  },[])
  return (
  <div className='relative'>
    <div className=''>
      <div className='border-t-2'>
        <OptionsBar options={optionsArrays.footer}  />
      </div>
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