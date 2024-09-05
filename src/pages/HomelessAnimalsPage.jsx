import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Gallery from '../components/organisms/Gallery'

function HomelessAnimalsPage() {
  const [allHomelessAnimals, setAllHomelessAnimals] = useState(null)
  useEffect(()=>{
    getPets()
  },[])
  const getPets = async () => {
    const ans = await getAnimalsBackend('homeless')
    setAllHomelessAnimals(ans.data.body)
  }
  return (
    <div>
      <Gallery petsArray={allHomelessAnimals}/>
    </div>
  )
}

export default HomelessAnimalsPage