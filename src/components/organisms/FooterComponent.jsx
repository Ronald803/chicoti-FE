import React from 'react'

function FooterComponent() {
  return (
    <div className='bg-primary py-1'>
      <div className='flex flex-row pt-1 pb-2'>
        <div className='w-1/2 text-center'>
          <a href='/search'>🔎</a>
        </div>
        <div className='w-1/2 text-center'>
          <a href='/user'>👤</a>
        </div>
      </div>
      <hr/>
      <div className='text-white text-center text-sm py-1'>
        El amor no se puede comprar pero si se puede adoptar...
      </div>
    </div>
  )
}

export default FooterComponent