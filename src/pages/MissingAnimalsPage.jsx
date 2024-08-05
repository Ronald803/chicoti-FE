import React, { useContext, useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Carousel from '../components/organisms/Carousel'
import { GeneralContext } from '../modules/context/GeneralContext'
import CardInfoPet from '../components/organisms/CardInfoPet'
import Gallery from '../components/organisms/Gallery'

function MissingAnimalsPage() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const [allMissingAnimals, setAllMissingAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async() =>{
    const ans = await getAnimalsBackend("missing")
    setAllMissingAnimals(ans.data.body)
  }
  return (
    <div>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <Gallery petsArray={allMissingAnimals}/>
      }
    </div>
  )
}

export default MissingAnimalsPage