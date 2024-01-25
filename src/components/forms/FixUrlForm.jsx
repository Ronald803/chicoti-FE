import React, { useState } from 'react'
import clipboardCopy from 'clipboard-copy';

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
        console.log(animal)
    }
  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div className='pt-2 flex'>
                <div className='w-1/3'><label className='ps-2' htmlFor='text'>URL</label></div>
                <div className='w-2/3 rounded-lg border-tertiary border'>
                    <input
                        type='text'
                        id='text'
                        name='photoUrlOfficial'
                        className=' '
                        placeholder={pet.photoUrl}
                        disabled
                    />
                    <button onClick={handleCopyButton} className='border-s-2 border-tertiary ps-1 hover:bg-fourth'>📑</button>
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
                <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Guardar URL Corregido</button>
            </div>
        </form>
    </div>
  )
}

export default FixUrlForm