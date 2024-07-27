import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'

function CardInfoPet() {
    const {setIsAnimalChoosen,animalChoosen,setAnimalChoosen} = useContext(GeneralContext)
    const goBack = () => {
        setAnimalChoosen(null)
        setIsAnimalChoosen(false)
    }
    return (
    <div className='w-full rounded-lg relative pt-2'>
        <div className='absolute top-2 left-0  text-white text-sm'>
            <button onClick={goBack} className='fixed bg-primary py-1 px-2 rounded-md'> {'<<'} Atrás</button>
        </div>
        <div className='w-auto px-4'>
            <img 
                className='w-full h-full object-cover rounded-t-lg' 
                src={animalChoosen.photoUrlOfficial}
            />
        </div>
        <div className='py-1 px-2 bg-tertiary text-sm flex'>
            <div className='w-1/2'>
                <div className='flex px-2'>
                    <p className='w-2/5'>Género: </p>
                    <p className='w-3/5'>{animalChoosen.gender}</p>
                </div>
                <div className='flex px-2'>
                    <p className='w-2/5'>Raza: </p>
                    <p className='w-3/5'>{animalChoosen.breed}</p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex px-2'>
                    <p className='w-2/5'>Edad:</p>
                    <p className='w-3/5'>{animalChoosen.age} año(s)</p>
                </div>
                <div className='flex px-2'>
                    <p className='w-2/5'>Celular:</p>
                    <p className='w-3/5'>{animalChoosen.cellphones[1]}</p>
                </div>
                <div className='px-2'>
                    <p className='CAPITALIZE'>{animalChoosen.other}</p>
                </div>
            </div>
        </div>
        <div className='py-3 bg-tertiary text-center'>. </div>
    </div>
  )
}

export default CardInfoPet