import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests';
import Carousel from './organisms/Carousel';
import SearchForm from './organisms/SearchForm';

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
    const [seekResults, setSeekResults] = useState(false)
    
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
      if(petCharacteristic.gender=="machito" && petCharacteristic.species=="perro"){
        petsAuxi=maleDogs
      } else if(petCharacteristic.gender=="machito" && petCharacteristic.species=="gato"){
        petsAuxi=maleCats
      } else if(petCharacteristic.gender=="hembrita" && petCharacteristic.species=="perro"){
        petsAuxi=femaleDogs
      } else if(petCharacteristic.gender=="hembrita" && petCharacteristic.species=="gato"){
        petsAuxi=femaleCats
      } else if(petCharacteristic.gender=="machito" ){
        petsAuxi=[...maleDogs,...maleCats]
      } else if(petCharacteristic.gender=="hembrita"){
        petsAuxi=[...femaleDogs,...femaleCats]
      } else if(petCharacteristic.species=="perro"){
        petsAuxi=[...maleDogs,...femaleDogs];
      } else if(petCharacteristic.species=="gato"){
        petsAuxi=[...maleCats,...femaleCats]
      } else {
        petsAuxi=allPets
      }

      if(petCharacteristic.breed == ""){
        petsFound = petsAuxi;
      } else {
        petsAuxi.map((pet)=>{
          if(pet.breed === petCharacteristic.breed){
            petsFound.push(pet)
          }
        })  
      }
      setPets(petsFound)
      setSeekResults(true)
    }
  return (
    <div className='py-2'>
      <div className='text-center pb-2'>
      Busca en nuestra base de datos 🔎
      </div>
      <div className='bg-primary py-1' >
        {
          !seekResults 
          ?
          <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
          :
          <div className=''>
            <Carousel petsArray={pets} title='Resultados de busqueda' link=''/>
            <div className='py-2 text-center'>
              <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border' onClick={()=>{setSeekResults(false)}}>Nueva Busqueda</button>
            </div>
          </div>
        }          
      </div>
    </div>
  )
}

export default Seeker