import React from 'react'
import ActionButton from '../molecules/ActionButton'
import ProfileSingleDetail from '../molecules/ProfileSingleDetail'

function CardInfoPet({ animalChoosen }) {
    return (
        <div className='w-full rounded-lg pt-1'>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-2 lg:max-w-4xl'>
                    <div className='w-full flex justify-center'>
                        <div className='w-auto px-4 lg:max-h-96'>
                            <img
                                className='w-full h-full object-cover rounded-t-lg'
                                src={animalChoosen?.photoUrlOfficial}
                            />
                        </div>
                    </div>
                    <div className='py-2 px-2 bg-tertiary text-sm lg:py-9'>
                        <div className='px-3 lg:px-5'>
                            <div className='flex w-40 bg-white rounded-md pb-1 justify-center'>
                                <p className='text-xl pe-1'>{animalChoosen?.species == 'dog' ? '🐶' : ''} {animalChoosen?.species == 'cat' ? '😸' : ''} </p>
                                <p className='font-bold pe-2 pt-2'>{animalChoosen?.petName}</p>
                            </div>
                        </div>
                        <div className='py-1 lg:py-2'>
                            <hr /><hr />
                        </div>
                        <div className='px-1 py-1 lg:px-5'>
                            <div className='flex'>
                                <div className='w-1/2'>
                                    <ProfileSingleDetail icon='🐾' detailTitle='Género' detailInfo={animalChoosen?.gender} />
                                    <ProfileSingleDetail icon='🧬' detailTitle='Raza' detailInfo={animalChoosen?.breed} />
                                    <ProfileSingleDetail icon='⌛' detailTitle='Edad (años)' detailInfo={animalChoosen?.age} />
                                    <ProfileSingleDetail icon='📞' detailTitle='Celular de contacto' detailInfo={animalChoosen?.cellphones[0]} />
                                </div>
                                <div className='w-1/2 p-2 border-s-2'>
                                    <ProfileSingleDetail icon='🗒️' detailTitle='Información extra' detailInfo={animalChoosen?.other} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ActionButton animalChoosen={animalChoosen} />
        </div>
    )
}

export default CardInfoPet