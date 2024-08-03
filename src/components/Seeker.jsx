import React, { useContext, useRef, useState } from 'react'
import { getAnimalsByQueryBackend } from '../requests/animalRequests';
import SearchForm from './organisms/SearchForm';
import Gallery from './organisms/Gallery';
import { GeneralContext } from '../modules/context/GeneralContext';
import CardInfoPet from './organisms/CardInfoPet';

function Seeker() {
  const { isAnimalChoosen } = useContext(GeneralContext)
  const genderRef = useRef(null);
  const speciesRef = useRef(null);
  const characteristicRef = useRef(null);
  const [petsArray, setPetsArray] = useState([])
  const getSpecificPets = async (query)=>{
      const answer = await getAnimalsByQueryBackend(query)
      console.log(answer.data)
      setPetsArray(answer.data.body)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let q = "";
    if(characteristicRef.current.value!=""){
      q = q + `characteristic=${characteristicRef.current.value}&`
    }
    if(genderRef.current.value!=""){
      q = q + `gender=${genderRef.current.value}&`
    }
    if(speciesRef.current.value!=""){
      q = q + `species=${speciesRef.current.value}&`
    }
    console.log(q)
    getSpecificPets(q)
  }
  return (
    <div className='py-1'>
      {
        isAnimalChoosen
        ?
        <CardInfoPet/>
        :
        <div>
          <SearchForm 
            handleSubmit={handleSubmit} 
            genderRef={genderRef}
            characteristicRef={characteristicRef}
            speciesRef={speciesRef}
          />
          {
            petsArray.length>0
            ?
            <Gallery petsArray={petsArray} />
            :
            <div className='p-2'>No hay resultados...</div>
          }
        </div>  
      }
    </div>
  )
}

export default Seeker