import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'

function NavBar() {
	const { bodyTag, setBodyTag } = useContext(GeneralContext)
	const handleChangeBody = (tag) => {
		setBodyTag(tag)
	}
  return (
    <div className='w-full'>
			<div className='flex flex-row justify-center'>
				<div className='w-36'>
					<a href='/'>
						<img className='w-full' src='./logo-chicoti.png'/>
					</a>
				</div>
			</div>
			<div className='flex flex-row bg-primary py-1'>
				<div className='w-1/3 text-center text-white'>
					<button className={bodyTag=="perdidos"?"text-black":""} onClick={()=>handleChangeBody("perdidos")}>
						Perdidos
					</button>
				</div>
				<div className='w-1/3 text-center text-white'>
					<button className={bodyTag=="encontrados"?"text-black":""} onClick={()=>handleChangeBody("encontrados")}>
						Encontrados
					</button>
				</div>
				<div className='w-1/3 text-center text-white'>
					<button className={bodyTag=="sinHogar"?"text-black":""} onClick={()=>handleChangeBody("sinHogar")}>
						Sin Hogar
					</button>
				</div>
			</div>
		</div>
  )
}

export default NavBar