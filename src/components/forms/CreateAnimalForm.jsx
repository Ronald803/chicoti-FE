import React, { useState } from 'react'
import { postNewAnimalBackend } from '../../requests/animalRequests'

function CreateAnimalForm(props) {
    const characteristic = props.fatherData
    console.log(characteristic);
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
    <div className='flex items-center justify-center'>
        <div className='m-2 border-2 border-black rounded-lg w-96'>
            <h4 className='text-center font-bold bg-secondary py-2 text-white'>Te ayudamos a encontrar a tu peque</h4>
            <h4 className='px-4 pt-2'>Llena el siguiente formulario</h4>
            <div className='p-4 '>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label className='w-1/3' htmlFor='name'>Nombre</label>
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='species'>Especie</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="species" id="species" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value="dog">Perro</option>
                            <option value="cat">Gato</option>
                            <option valued="other">Otro</option>
                        </select>
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='breed'>Raza</label>
                        <input 
                            type='text'
                            id='breed'
                            name='breed'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='gender'>Sexo</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="gender" id="gender" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value="machito" >machito</option>
                            <option value="hembrita">hembrita</option>
                        </select>
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3'  htmlFor='color'>Color</label>
                        <input 
                            type='text'
                            id='color'
                            name='color'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='age'>Edad (años)</label>
                        <input 
                            type='number'
                            id='age'
                            name='age'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>            
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='sterilized'>Esterilizado</label>
                        <select className='w-2/3 rounded-lg border border-tertiary' name="sterilized" id="sterilized" onChange={handleChange}>
                            <option value="">Elige una opción</option>
                            <option value={true} >Si</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='sterilizedCode'>Código de esterilización</label>
                        <input 
                            type='text'
                            id='sterilizedCode'
                            name='sterilizedCode'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='other'>Otra información relevante</label>
                        <input 
                            type='text'
                            id='other'
                            name='other'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='date'>Cuándo?</label>
                        <input 
                            type='date'
                            id='date'
                            name='date'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
                    <div className='flex pt-1'>
                        <label className='w-1/3' htmlFor='place'>Dónde?</label>
                        <input 
                            type='text'
                            id='place'
                            name='place'
                            onChange={handleChange}
                            className='w-2/3 rounded-lg border border-tertiary'
                        />
                    </div>
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