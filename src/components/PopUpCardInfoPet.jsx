import React from 'react'
import infoAlert from '../alerts/infoAlert';

function PopUpCardInfoPet(props) {
    const toggleCard = props.toggleCard;
    const petInfo = props.petInfo;
    const closePopUpCard = ()=>{
        console.log(petInfo);
        toggleCard()
    }
    const buttonAction = (e)=>{
        infoAlert("Confirmación","Estás seguro?")
    }
  return (
    <div>
        <div className='flex items-center justify-center fixed top-0 left-0 z-50 w-screen h-screen'>
        <div className='m-1 w-96 rounded-lg '>
            <div className='py-1 ps-4 pe-1 rounded-t-lg text-end bg-tertiary flex border-primary border-x-2 border-t-2'>
                <p className='text-center w-5/6 text-xl text-white font-bold tracking-wider'>{petInfo.petName}</p>
                <button onClick={closePopUpCard} className='w-1/6 bg-primary rounded-lg  text-white hover:bg-fourth hover:text-black'>X</button>
            </div>
            <div className='bg-white border-2 border-b-primary border-x-primary rounded-b-lg'>
                <div className='w-full h-80'><img className='w-full h-full object-cover rounded-t-lg' src={petInfo.photoUrlOfficial}/></div>
                <div className='uppercase px-2 bg-tertiary text-white'>
                    <div className='flex px-6'>
                        <p className='font-bold w-1/2'>Género: </p>
                        <p className='w-1/2'>{petInfo.gender}</p>
                    </div>
                    <div className='flex px-6'>
                        <p className='font-bold w-1/2'>Raza: </p>
                        <p className='w-1/2'>{petInfo.breed}</p>
                    </div>
                    <div className='flex px-6'>
                        <p className='font-bold w-1/2'>Edad:</p>
                        <p className='w-1/2'>{petInfo.age} año(s)</p>
                    </div>                    
                    <p className='CAPITALIZE'>{petInfo.other}</p>
                    <div className='flex px-1'>
                        <p className='ps-4 font-bold w-1/2'>Celular:</p>
                        <p className='w-1/2'>{petInfo.cellphones[1]}</p>
                    </div>
                    <div className='text-center'>
                        {
                            petInfo.characteristic == "perdido"
                            &&
                            <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Lo encontré</button>
                        }
                        {
                            petInfo.characteristic == "encontrado"
                            &&
                            <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Conozco su hogar</button>
                        }
                        {
                            petInfo.characteristic == "sin-hogar"
                            &&
                            <button onClick={()=>{buttonAction()}} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Quiero adoptarlo</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PopUpCardInfoPet