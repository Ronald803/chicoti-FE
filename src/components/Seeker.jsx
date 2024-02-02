import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests';
import Carousel from './Carousel';

function Seeker(props) {
    const characteristicPet = props.characteristicPet;
    let petCharacteristic = {
      breed: ""
    }
    const [allPets, setAllPets] = useState([])
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        getSpecificPets()
    },[])
    const getSpecificPets = ()=>{
        getAnimalsBackend(characteristicPet)
            .then(ans=>{
                setAllPets(ans.data.body)
                setPets(ans.data.body);
            })
            .catch(e=>{console.log(e)})
    }
    const handleChange = (e)=>{
      petCharacteristic[e.target.name] = e.target.value
      console.log(petCharacteristic);
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      let petsFound = [];
      console.log(allPets);
      allPets.map((pet)=>{
        if(pet.breed === petCharacteristic.breed){
          petsFound.push(pet)
        }
      })
      console.log(petsFound);
      setPets(petsFound)
    }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='pt-2'>
            <div><label className='ps-2' htmlFor='breed'>Raza</label></div>
            <input
                type='breed'
                id='breed'
                name='breed'
                onChange={handleChange}
                className='my-1 py-1 w-full rounded-lg border border-tertiary'
            />
          </div>
          <div className='py-2 text-center'>
            <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Buscar</button>
          </div>
        </form>
      </div>
      <div>
        <Carousel petsArray={pets} title='' link=''/>
      </div>
    </div>
  )
}

export default Seeker