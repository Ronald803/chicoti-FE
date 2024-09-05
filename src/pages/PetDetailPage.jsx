import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardInfoPet from '../components/organisms/CardInfoPet'

function PetDetailPage() {
  const { petId } = useParams()
  const [pet, setPet] = useState(null)
  useEffect(()=>{
    setPet(JSON.parse(localStorage.getItem('pet')))
  },[])
  return (
    <div>
      <CardInfoPet animalChoosen={pet} />
    </div>
  )
}

export default PetDetailPage