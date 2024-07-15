import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext';

function Carousel(props) {
    const {setIsAnimalChoosen,setAnimalChoosen,setCurrentPage} = useContext(GeneralContext)
    const togglePopCard = (pet)=> {
        setIsAnimalChoosen(true)
        setAnimalChoosen(pet)
        setCurrentPage("AnimalInfo")
    }
    const pets = props.petsArray;
return (
<div className='mt-1 px-1'>
    <div className=' h-72 items-center overflow-x-auto overscroll-x-contain flex space-x-2 border-4 border-t-secondary px-1'>
        {
            pets?.map((pet,index)=>{
                return (
                    <div key={index} className='relative h-64 w-48 text-center' onClick={()=>{togglePopCard(pet)}}>
                        <div className='w-48 h-full'>
                            <img 
                                className='h-full object-cover rounded-t-lg' 
                                src={pet.photoUrlOfficial}
                            />
                        </div>
                        <div className='absolute bottom-0 w-auto text-center bg-primary text-white text-xs p-1'>
                            {pet.petName}
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default Carousel