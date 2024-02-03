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
    const [maleDogs, setMaleDogs] = useState([])
    const [femaleDogs, setFemaleDogs] = useState([])
    const [maleCats, setMaleCats] = useState([])
    const [femaleCats, setFemaleCats] = useState([])

    useEffect(()=>{
        getSpecificPets()
    },[])
    const getSpecificPets = ()=>{
        getAnimalsBackend(characteristicPet)
            .then(ans=>{
                let maleDogsAux=[];
                let femaleDogsAux=[];
                let maleCatsAux=[];
                let femaleCatsAux=[];
                setAllPets(ans.data.body)
                ans.data.body.map(pet=>{
                  if(pet.species == "dog" && pet.gender == "machito"){maleDogsAux.push(pet)}
                  else if(pet.species == "dog" && pet.gender == "hembrita"){femaleDogsAux.push(pet)}
                  else if(pet.species == "cat" && pet.gender == "machito"){maleCatsAux.push(pet)}
                  else if(pet.species == "cat" && pet.gender == "hembrita"){femaleCatsAux.push(pet)}
                })
                setMaleDogs(maleDogsAux);
                setFemaleDogs(femaleDogsAux);
                setMaleCats(maleCatsAux);
                setFemaleCats(femaleCatsAux);
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
            <div><label className='ps-2' htmlFor='species'>Especie</label></div>
            <input
                type='species'
                id='species'
                name='species'
                onChange={handleChange}
                className='my-1 py-1 w-full rounded-lg border border-tertiary'
            />
          </div>
          <div className='pt-2'>
            <div><label className='ps-2' htmlFor='gender'>Género</label></div>
            <input
                type='gender'
                id='gender'
                name='gender'
                onChange={handleChange}
                className='my-1 py-1 w-full rounded-lg border border-tertiary'
            />
          </div>
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
        <div>
          <Carousel petsArray={pets} title='' link=''/>
        </div>
      </div>
      <div>
        <Carousel petsArray={maleDogs} title='Perritos' link=''/>
      </div>
      <div>
        <Carousel petsArray={femaleDogs} title='Perritas' link=''/>
      </div>
      <div>
        <Carousel petsArray={maleCats} title='Gatitos' link=''/>
      </div>
      <div>
        <Carousel petsArray={femaleCats} title='Gatitas' link=''/>
      </div>
    </div>
  )
}

export default Seeker