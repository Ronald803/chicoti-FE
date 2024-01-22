import React, { useEffect, useState } from 'react'

function Carousel(props) {
    const pets = props.petsArray;
    const title = props.title;
    const link = props.link;
    useEffect(()=>{
        console.log(pets[0]?.characteristic);
        if(pets[0]?.characteristic == 'perdido'){
            title = 'Perdidos'
        } else if(pets[0]?.characteristic == 'encontrado'){
            title = 'Encontrados'
        } else if(pets[0]?.characteristic == 'sin-hogar'){
            title = 'Sin Hogar'
        }
    },[])
return (
<div className='mt-2 px-4'>
    <div className='text-2xl font-bold text-center tracking-wide'><a href={link}>{title}</a></div>
    <div className='w-auto h-72 items-center overflow-x-auto overscroll-x-contain flex space-x-6'>
        {
            pets?.map((pet,index)=>{
                return (
                    <div className='w-48 h-64 shadow-md rounded-lg flex-none transform transition-all hover:-translate-y-2 hover:shadow-xl'>
                        <div className='w-full h-5/6'><img className='w-full h-full object-cover rounded-t-lg' src={pet.photoUrlOfficial}/></div>
                        <div className='w-full h-1/6  rounded-b-lg'>
                          <p className='px-4 py-1 font-bold text-xl text-center'>{pet.petName}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
    
  )
}

export default Carousel