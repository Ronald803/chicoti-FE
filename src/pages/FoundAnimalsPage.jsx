import React, { useContext, useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Carousel from '../components/organisms/Carousel'
import { GeneralContext } from '../modules/context/GeneralContext'
import CardInfoPet from '../components/organisms/CardInfoPet'

function FoundAnimalsPage() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const [allFoundAnimals, setAllFoundAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async() => {
    const ans = await getAnimalsBackend("encontrado")
    setAllFoundAnimals(ans.data.body)
  }
  return (
    <div className=''>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <Carousel petsArray={allFoundAnimals} />
      }
    </div>
  )
}

export default FoundAnimalsPage