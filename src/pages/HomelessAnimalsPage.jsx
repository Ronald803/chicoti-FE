import React, { useContext, useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import { GeneralContext } from '../modules/context/GeneralContext'
import CardInfoPet from '../components/organisms/CardInfoPet'
import Gallery from '../components/organisms/Gallery'

function HomelessAnimalsPage() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const [allHomelessAnimals, setAllHomelessAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async () => {
    const ans = await getAnimalsBackend('sin-hogar')
    setAllHomelessAnimals(ans.data.body)
  }
  return (
    <div>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <Gallery petsArray={allHomelessAnimals}/>
      }
    </div>
  )
}

export default HomelessAnimalsPage