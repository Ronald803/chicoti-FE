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
<div className='px-1'>
    <div className=' items-center overflow-x-auto overscroll-x-contain flex space-x-2 px-1'>
        {
            pets?.map((pet,index)=>{
                return (
                    <div key={index} className=' w-48 text-center' onClick={()=>{togglePopCard(pet)}}>
                        <div className='w-48 h-64 flex justify-center'>
                            <img 
                                className='h-full object-cover rounded-t-lg' 
                                src={pet.photoUrlOfficial}
                            />
                        </div>
                        <div className=' w-auto text-center bg-primary text-white text-xs py-2'>
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