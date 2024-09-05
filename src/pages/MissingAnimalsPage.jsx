import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Gallery from '../components/organisms/Gallery'

function MissingAnimalsPage() {
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
      <Gallery petsArray={allMissingAnimals}/>
    </div>
  )
}

export default MissingAnimalsPage