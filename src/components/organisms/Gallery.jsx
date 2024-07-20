import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import SinglePetCard from '../molecules/SinglePetCard'

function Gallery(props) {
    const {setIsAnimalChoosen,setAnimalChoosen,setCurrentPage} = useContext(GeneralContext)
    const togglePopCard = (pet)=> {
        setIsAnimalChoosen(true)
        setAnimalChoosen(pet)
        setCurrentPage("AnimalInfo")
    }
    const pets = props.petsArray;
  return (
<div className="container mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {pets.map((pet, index) => (
        <SinglePetCard key={index} togglePopCard={togglePopCard} pet={pet} />
      ))}
    </div>
</div>
  )
}

export default Gallery