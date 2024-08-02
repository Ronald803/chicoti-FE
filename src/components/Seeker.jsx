import React, { useState } from 'react'
import { getAnimalsByQueryBackend } from '../requests/animalRequests';
import SearchForm from './organisms/SearchForm';
import Gallery from './organisms/Gallery';

function Seeker() {
  let petCharacteristic = {
    breed: "",
    characteristic: "",
    gender: "",
    species: "",
  }
  const [petsArray, setPetsArray] = useState([])
  const getSpecificPets = async (query)=>{
      const answer = await getAnimalsByQueryBackend(query)
      console.log(answer.data)
      setPetsArray(answer.data.body)
  }
  const handleChange = (e)=>{
    petCharacteristic[e.target.name] = e.target.value
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let q = "";
    if(petCharacteristic.breed!=""){
      q = `breed=${petCharacteristic.breed}&`
    } 
    if(petCharacteristic.characteristic!=""){
      q = q + `characteristic=${petCharacteristic.characteristic}`
    }
    if(petCharacteristic.gender!=""){
      q = q + `gender=${petCharacteristic.gender}`
    }
    if(petCharacteristic.species!=""){
      q = q + `species=${petCharacteristic.species}`
    }
    console.log(petCharacteristic)
    console.log(q)
    getSpecificPets(q)
  }
  return (
    <div className='py-2'>
      <div className='text-center pb-2'>
      Busca en nuestra base de datos 🔎
      </div>
      <div className='bg-primary py-1' >
        <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      {
        petsArray.length>0
        ?
        <Gallery petsArray={petsArray} />
        :
        <div>No hay resultados</div>
      }

    </div>
  )
}

export default Seeker