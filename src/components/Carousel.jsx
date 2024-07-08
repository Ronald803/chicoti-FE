import React, { useEffect, useState } from 'react'
import PopUpCardInfoPet from './PopUpCardInfoPet';

function Carousel(props) {
    const [popUpWindow, setPopUpWindow] = useState(false);
    const [choosenPet, setChoosenPet] = useState({})
    const togglePopCard = (pet)=> {
        setChoosenPet(pet)
        setPopUpWindow(!popUpWindow)
    }
    const pets = props.petsArray;
    const title = props.title;
    const link = props.link;
    
return (
<div className='mt-1 px-1'>
    <div className='text-base font-bold text-center tracking-wide text-white bg-tertiary border-2 border-white py-1 rounded-t-lg hover:bg-fourth hover:text-black'>
        {
            link == ""
            ?
            <div>{title}</div>
            :
            <a href={link}>{title}</a>
        }        
    </div>
    <div className='w-auto h-72 items-center overflow-x-auto overscroll-x-contain flex space-x-2 border-4 border-t-secondary px-1'>
        {
            pets?.map((pet,index)=>{
                return (
                    <div key={index}>
                        <div className='w-48 h-64 shadow-md rounded-lg flex-none transform transition-all hover:-translate-y-2 hover:shadow-xl border-2 border-fourth'>
                            <div className='w-full h-5/6'><img className='w-full h-full object-cover rounded-t-lg' src={pet.photoUrlOfficial}/></div>
                            <div className='w-full h-1/6  rounded-b-lg bg-fourth pt-2'>
                              <p onClick={()=>{togglePopCard(pet)}} className='font-bold text-base text-center bg-fourth border-y border-y-white'>{pet.petName}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    {
        popUpWindow
        &&
        <PopUpCardInfoPet toggleCard={togglePopCard} petInfo={choosenPet}/>
    }
</div>
    
  )
}

export default Carousel