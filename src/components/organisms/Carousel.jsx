import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext';
import SinglePetCard from '../molecules/SinglePetCard';

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
                    <SinglePetCard key={index} togglePopCard={togglePopCard} pet={pet} />
                )
            })
        }
    </div>
</div>
  )
}

export default Carousel