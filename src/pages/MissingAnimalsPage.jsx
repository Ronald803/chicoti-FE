import React, { useContext, useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Carousel from '../components/organisms/Carousel'
import { GeneralContext } from '../modules/context/GeneralContext'
import CardInfoPet from '../components/organisms/CardInfoPet'

function MissingAnimalsPage() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const [allMissingAnimals, setAllMissingAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async() =>{
    const ans = await getAnimalsBackend("perdido")
    setAllMissingAnimals(ans.data.body)
  }
  return (
    <div>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <Carousel petsArray={allMissingAnimals}/>
      }
    </div>
  )
}

export default MissingAnimalsPage