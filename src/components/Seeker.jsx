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
    <div className=''>
      {/* <div>
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
      </div> */}
      <div>
        <Carousel petsArray={allPets} title='os' link=''/>
      </div>
      <div className='text-center bg-primary py-2'>
        <button onClick={()=>{setSeekWindow(!seekWindow)}} className='py-1 px-8 rounded-lg hover:bg-primary hover:text-white bg-fourth text-black border '>Busca en nuestra base de datos 🔎</button>
      </div>
      {
        seekWindow
        &&
        <div className='bg-primary py-1' >
          {
            !seekResults ?
            <form onSubmit={handleSubmit} className='w-96 m-auto'>
              <div className='pt-2 flex'>
                <div className='w-1/5 ps-2 text-white' ><label className='' htmlFor='species'>Especie</label></div>
                <input
                    type='species'
                    id='species'
                    name='species'
                    onChange={handleChange}
                    className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
                />
              </div>
              <div className='pt-2 flex'>
                <div className='w-1/5 ps-2 text-white'><label className='' htmlFor='gender'>Género</label></div>
                <input
                    type='gender'
                    id='gender'
                    name='gender'
                    onChange={handleChange}
                    className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
                />
              </div>
              <div className='pt-2 flex'>
                <div className='w-1/5 ps-2 text-white'><label className='w-full' htmlFor='breed'>Raza</label></div>
                <input
                    type='breed'
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                    className='w-4/5 mx-2 ps-4 rounded-lg border border-tertiary'
                />
              </div>
              <div className='py-2 text-center'>
                <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border'>Buscar</button>
              </div>
            </form>
            :
            <div className=''>
              <Carousel petsArray={pets} title='Resultados de busqueda' link=''/>
              <div className='py-2 text-center'>
                <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black border' onClick={()=>{setSeekResults(false)}}>Nueva Busqueda</button>
              </div>
            </div>
          }          
        </div>
      }
    </div>
  )
}

export default Seeker