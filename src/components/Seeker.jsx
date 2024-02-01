import React, { useEffect } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests';

function Seeker(props) {
    const characteristicPet = props.characteristicPet;
    console.log(characteristicPet);
    useEffect(()=>{
        getSpecificPets()
    },[])
    const getSpecificPets = ()=>{
        getAnimalsBackend(characteristicPet)
            .then(ans=>{
                console.log(ans);
            })
            .catch(e=>{console.log(e)})
    }
  return (
    <div>
        
    </div>
  )
}

export default Seeker