import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Gallery from '../components/organisms/Gallery'

function FoundAnimalsPage() {
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
      <Gallery petsArray={allFoundAnimals}/>
    </div>
  )
}

export default FoundAnimalsPage