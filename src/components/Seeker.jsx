import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests';
import Carousel from './Carousel';

function Seeker(props) {
    const characteristicPet = props.characteristicPet;
    let petCharacteristic = {
      breed: "",
      gender: "",
      species: "",
    }
    const [allPets, setAllPets] = useState([])
    const [pets, setPets] = useState([]);
    const [maleDogs, setMaleDogs] = useState([])
    const [femaleDogs, setFemaleDogs] = useState([])
    const [maleCats, setMaleCats] = useState([])
    const [femaleCats, setFemaleCats] = useState([])
    const [seekWindow, setSeekWindow] = useState(false)
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
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(petCharacteristic);
      let petsFound = [];
      let petsAuxi = [];
      if(petCharacteristic.gender="machito" && petCharacteristic.species=="perro"){petsAuxi=maleDogs}
      if(petCharacteristic.gender="machito" && petCharacteristic.species=="gato"){petsAuxi=maleCats}
      if(petCharacteristic.gender="hembrita" && petCharacteristic.species=="perro"){petsAuxi=femaleDogs}
      if(petCharacteristic.gender="hembrita" && petCharacteristic.species=="gato"){petsAuxi=femaleCats}
      petsAuxi.map((pet)=>{
        if(pet.breed === petCharacteristic.breed){
          petsFound.push(pet)
        }
      })
      setPets(petsFound)
    }
  return (
    <div>
      <div className='text-center'>
        <button onClick={()=>{setSeekWindow(!seekWindow)}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Busca en nuestra base de datos 🔎</button>
      </div>
      {
        seekWindow
        &&
        <div>
          <form onSubmit={handleSubmit}>
            <div className='pt-2 flex'>
              <div className='w-1/5 ps-2' ><label className='' htmlFor='species'>Especie</label></div>
              <input
                  type='species'
                  id='species'
                  name='species'
                  onChange={handleChange}
                  className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
              />
            </div>
            <div className='pt-2 flex'>
              <div className='w-1/5 ps-2'><label className='' htmlFor='gender'>Género</label></div>
              <input
                  type='gender'
                  id='gender'
                  name='gender'
                  onChange={handleChange}
                  className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
              />
            </div>
            <div className='pt-2 flex'>
              <div className='w-1/5 ps-2'><label className='w-full' htmlFor='breed'>Raza</label></div>
              <input
                  type='breed'
                  id='breed'
                  name='breed'
                  onChange={handleChange}
                  className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
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
      }
      
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