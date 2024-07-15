import React, { useEffect, useState } from 'react'
import { getAnimalsBackend } from '../requests/animalRequests'
import Carousel from '../components/organisms/Carousel'

function HomePage() {
  const [perdidos, setPerdidos] = useState([])
  const [encontrados, setEncontrados] = useState([])
  const [sinHogar, setSinHogar] = useState([])
  useEffect(()=>{
    getAllAnimals()
  },[])
  const getAllAnimals = async ()=>{
    const auxPerdidos = [];
    const auxEncontrados = [];
    const auxSinHogar = [];
    await getAnimalsBackend()
      .then(answer=>{
        answer.data.body.map(animal=>{
          if(animal.characteristic === "perdido"){
            const index = auxPerdidos.findIndex((per)=>{ return per._id === animal._id})
            if(index<0){auxPerdidos.push(animal)}
          } else if(animal.characteristic === "encontrado"){
            const index = auxEncontrados.findIndex((per)=>{ return per._id === animal._id})
            if(index<0){auxEncontrados.push(animal)}
          } else if(animal.characteristic === "sin-hogar"){
            const index = auxSinHogar.findIndex((per)=>{ return per._id === animal._id})
            if(index<0){auxSinHogar.push(animal)}
          }
        })
        setPerdidos([...auxPerdidos]);
        setEncontrados([...auxEncontrados]);
        setSinHogar([...auxSinHogar]);
        })
      .catch(e=>{console.log(e);})
  }
  
  return (
    <div>
      <Carousel petsArray={perdidos} title='Perdidos' link='/missing'/>
      <Carousel petsArray={encontrados} title='Encontrados' link='/found'/>
      <Carousel petsArray={sinHogar} title='Sin Hogar' link='/homeless'/>
    </div>
  )
}

export default HomePage