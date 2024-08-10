import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'

function CardInfoPet() {
    const { setIsAnimalChoosen, animalChoosen, setAnimalChoosen } = useContext(GeneralContext)
    const goBack = () => {
        setAnimalChoosen(null)
        setIsAnimalChoosen(false)
    }
    return (
        <div className='w-full rounded-lg relative pt-1'>
            <div className='absolute top-2 left-0  text-white text-sm'>
                <button onClick={goBack} className='fixed bg-primary py-1 px-2 rounded-md'> {'<<'} Atrás</button>
            </div>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-2 lg:max-w-4xl'>
                    <div className='w-full flex justify-center'>
                        <div className='w-auto px-4 lg:max-h-96'>
                            <img
                                className='w-full h-full object-cover rounded-t-lg'
                                src={animalChoosen.photoUrlOfficial}
                            />
                        </div>
                    </div>
                    <div className='py-2 px-4 bg-tertiary text-sm lg:py-9'>
                        <div className='px-3 lg:px-5'>
                            <div className='flex w-40 bg-white rounded-md pb-1 justify-center'>
                                <p className='text-xl pe-1'>{animalChoosen.species == 'dog' ? '🐶' : ''} {animalChoosen.species == 'cat' ? '😸' : ''} </p>
                                <p className='font-bold pe-2 pt-2'>{animalChoosen.petName}</p>
                            </div>
                        </div>
                        <div className='py-1 lg:py-2'>
                            <hr /><hr />
                        </div>
                        <div className='px-3 py-1 lg:px-5'>
                            <p className='lg:py-1'>Género: {animalChoosen.gender}</p>
                            <p className='lg:py-1'>Raza: {animalChoosen.breed}</p>
                            <p className='lg:py-1'>Edad: {animalChoosen.age} año(s)</p>
                            <p className='lg:py-1'>{animalChoosen.other}</p>
                        </div>
                        <div className='py-1 lg:py-5'>
                            <hr /><hr />
                        </div>
                        <div className='px-3 py-1 lg:px-5'>
                            <p>Celular: {animalChoosen.cellphones[0]}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='py-3 bg-tertiary text-center'>🐾🐾🐾🐾</div>
        </div>
    )
}

export default CardInfoPet