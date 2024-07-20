import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'

function CardInfoPet() {
    const {setIsAnimalChoosen,animalChoosen,setAnimalChoosen} = useContext(GeneralContext)
    const goBack = () => {
        setAnimalChoosen(null)
        setIsAnimalChoosen(false)
    }
    return (
<div className='h-80 w-full rounded-lg relative py-1'>
    <div>
        <div className='absolute top-3 left-3  text-white text-sm'>
            <button onClick={goBack} className='fixed bg-primary py-1 px-2 rounded-md'>Atrás</button>
        </div>
        <div className='absolute top-3 right-0 bg-fourth px-4 text-primary rounded-l-md text-sm py-1'>
            <p className=''>{animalChoosen.petName}</p>
        </div>
        <div className='w-auto'>
            <img 
                className='w-full h-full object-cover rounded-t-lg' 
                src={animalChoosen.photoUrlOfficial}
            />
        </div>
        <div className=''>
            <div className='px-2 bg-tertiary text-white text-sm'>
                <div className='flex px-6'>
                    <p className='w-1/2'>Género: </p>
                    <p className='w-1/2'>{animalChoosen.gender}</p>
                </div>
                <div className='flex px-6'>
                    <p className='w-1/2'>Raza: </p>
                    <p className='w-1/2'>{animalChoosen.breed}</p>
                </div>
                <div className='flex px-6'>
                    <p className='w-1/2'>Edad:</p>
                    <p className='w-1/2'>{animalChoosen.age} año(s)</p>
                </div>                    
                <p className='CAPITALIZE'>{animalChoosen.other}</p>
                <div className='flex px-1'>
                    <p className='ps-4 w-1/2'>Celular:</p>
                    <p className='w-1/2'>{animalChoosen.cellphones[1]}</p>
                </div>
                <div className='text-center'>
                    {
                        animalChoosen.characteristic == "perdido"
                        &&
                        <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Lo encontré</button>
                    }
                    {
                        animalChoosen.characteristic == "encontrado"
                        &&
                        <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Conozco su hogar</button>
                    }
                    {
                        animalChoosen.characteristic == "sin-hogar"
                        &&
                        <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Quiero adoptarlo</button>
                    }
                </div>
            </div>
        </div>
  </div>
</div>
  )
}

export default CardInfoPet