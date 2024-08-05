import React, { useContext, useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import { GeneralContext } from '../modules/context/GeneralContext'
import CardInfoPet from '../components/organisms/CardInfoPet'
import Gallery from '../components/organisms/Gallery'

function FoundAnimalsPage() {
  const {isAnimalChoosen} = useContext(GeneralContext)
  const [allFoundAnimals, setAllFoundAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async() => {
    const ans = await getAnimalsBackend("found")
    setAllFoundAnimals(ans.data.body)
  }
  return (
    <div className=''>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <Gallery petsArray={allFoundAnimals}/>
      }
    </div>
  )
}

export default FoundAnimalsPage