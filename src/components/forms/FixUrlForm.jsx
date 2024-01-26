import React, { useState } from 'react'
import clipboardCopy from 'clipboard-copy';
import { updateUrlPhotoBackend } from '../../requests/animalRequests';

function FixUrlForm(props) {
    const pet = props.pet
    const [animal, setAnimal] = useState(pet)
    const handleCopyButton = ()=>{
        clipboardCopy(pet.photoUrl)
    }
    const handleChange = (e) => {
        animal[e.target.name] = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(animal);
        updateUrlPhotoBackend(pet._id,{"photoUrlOfficial":animal.photoUrlOfficial})
            .then(answer=>{
                console.log(answer);
            })
            .catch(e=>{
                console.log(e);
            })
    }
  return (
    <div className='mt-2 border border-fourth rounded-lg'>
        <div className='text-center text-xl text-bold bg-fourth text-white py-1 rounded-t-lg'>{pet.petName}</div>
        <form className='mx-1'>
            <div className='pt-2 flex'>
                <div className='w-1/3'><label className='ps-2' htmlFor='text'>URL</label></div>
                <div className='w-2/3 rounded-lg border-tertiary border flex'>
                    <input
                        type='text'
                        id='text'
                        name='photoUrlOfficial'
                        className='w-4/5'
                        placeholder={pet.photoUrl}
                        disabled
                    />
                    <button onClick={handleCopyButton} className='border-s-2 border-tertiary hover:bg-fourth w-1/5'>📑</button>
                </div>
            </div>
            <div className='pt-2 flex'>
                <div className='w-1/3'><label className='ps-2' htmlFor='text'>URL corregida</label></div>
                <input
                    type='text'
                    id='text'
                    name='photoUrlOfficial'
                    onChange={handleChange}
                    className=' w-2/3 rounded-lg border-tertiary border'
                />
            </div>
            <div className='py-2 text-center'>
                <button onClick={handleSubmit} className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Guardar URL Corregido</button>
            </div>
        </form>
    </div>
  )
}

export default FixUrlForm