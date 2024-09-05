import React, { useContext } from 'react'
import { GeneralContext } from '../../modules/context/GeneralContext'
import SinglePetCard from '../molecules/SinglePetCard'
import { useLocation, useNavigate } from 'react-router-dom'

function Gallery(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { setIsAnimalChoosen, setAnimalChoosen, setCurrentPage } = useContext(GeneralContext)
  const togglePopCard = (pet) => {
    setIsAnimalChoosen(true)
    setAnimalChoosen(pet)
    setCurrentPage("AnimalInfo")
    //--------------------------------------------------------
    const stringPet = JSON.stringify(pet);
    localStorage.setItem('pet', stringPet)
    navigate(`${location.pathname}/${pet._id}`)
  }
  const pets = props.petsArray;
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {pets?.map((pet, index) => (
          <SinglePetCard key={index} togglePopCard={togglePopCard} pet={pet} />
        ))}
      </div>
    </div>
  )
}

export default Gallery