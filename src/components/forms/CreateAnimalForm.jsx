import React, { useState } from 'react'
import { postNewAnimalBackend } from '../../requests/animalRequests'
import OneLineLabelInput from '../molecules/OneLineLabelInput'

function CreateAnimalForm(props) {
    const characteristic = props.fatherData
    //console.log(characteristic);
    const [animal, setAnimal] = useState({
        name: " ",
        species: " ",
        breed: "criollo",
        gender: " ",
        age: 0,
        sterilized: false,
        sterilizedCode: " ",
        other: " ",
        date: " ",
        cellphone2: " ",
        cellphone3: " ",
        place: " ",
        color: " "
    })
    const [imagen, setImagen] = useState(null)
    const handleImageChange = (e) => {
        e.preventDefault();
        setImagen(e.target.files[0]) 
    }
    const handleChange = (e) => {
        animal[e.target.name] = (e.target.value).toUpperCase()
        console.log(animal);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        const newAnimal = {
            petName: animal.name,
            species: animal.species,
            breed: animal.breed,
            gender: animal.gender,
            age: animal.age,
            sterilized: animal.sterilized,
            sterilizedCode: animal.sterilizedCode,
            other: animal.other,
            date: animal.date,
            place: animal.place,
            color: animal.color,
            cellphones: [sessionStorage.getItem('c'),animal?.cellphone2,animal?.cellphone3]
        }
        console.log(newAnimal);
        formData.append('bodyJson',JSON.stringify(newAnimal));
        formData.append('image',imagen);
        await postNewAnimalBackend(formData,characteristic)
            .then(answer=>{
                console.log(answer);
            })
            .catch(e=>{
                console.log(e);
            })
    }
return (
    <div className='flex items-center justify-center text-sm'>
        <div className='m-2 border-2 border-black rounded-lg w-96'>
            <h4 className='text-center bg-secondary py-2 text-white'>Te ayudamos a encontrar a tu peque</h4>
            <h4 className='px-4 pt-2'>Llena el siguiente formulario</h4>
            <div className='p-4 '>
                <form onSubmit={handleSubmit}>
                    <OneLineLabelInput id='name' type='text' name='Nombre' onChange={handleChange} />
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='species'>Especie</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="species" id="species" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value="dog">Perro</option>
                            <option value="cat">Gato</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <OneLineLabelInput id='breed' type='text' name='Raza' onChange={handleChange} />
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='gender'>Sexo</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="gender" id="gender" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value="machito" >machito</option>
                            <option value="hembrita">hembrita</option>
                        </select>
                    </div>
                    <OneLineLabelInput id='color' type='text' name='Color' onChange={handleChange} />
                    <OneLineLabelInput id='age' type='number' name='Edad (años)' onChange={handleChange} />
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='sterilized'>Esterilizado</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="sterilized" id="sterilized" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value={true} >Si</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <OneLineLabelInput id='sterilizedCode' type='text' name='Código de esterilización' onChange={handleChange} />
                    <OneLineLabelInput id='other' type='text' name='Otra información relevante' onChange={handleChange} />
                    <OneLineLabelInput id='date' type='date' name='Cuándo?' onChange={handleChange} />
                    <OneLineLabelInput id='place' type='text' name='Dónde?' onChange={handleChange} />
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='cellphone1'>Celular</label>
                        <div className='w-2/3 rounded-lg border border-tertiary'>
                            <input 
                                type='number'
                                id='cellphone1'
                                name='cellphone1'
                                placeholder={sessionStorage.getItem('c')}
                                disabled
                                className='w-full mt-1'
                            />
                            <input 
                                type='number'
                                id='cellphone2'
                                name='cellphone2'
                                onChange={handleChange}
                                className='w-full mt-1'
                            />
                            <input 
                                type='number'
                                id='cellphone3'
                                name='cellphone3'
                                onChange={handleChange}
                                className='w-full mt-1'
                            />
                        </div>
                    </div>
                    <div>
                        <label  htmlFor='img'>Sube la fotografía más nitida que tengas del animalito</label>
                        <input 
                            type='file'
                            alt='imagen del animalito'
                            id='img'
                            name='Files'
                            accept='image/png, image/jpg'
                            onChange={handleImageChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='text-center mt-2'>
                        <button className='py-1 px-8 rounded-lg bg-primary text-white hover:bg-fourth hover:text-black'>Guardar información</button>
                    </div>
                </form>
            </div>        
        </div>
    </div>
    
  )
}

export default CreateAnimalForm