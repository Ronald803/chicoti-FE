import React, { useState } from 'react'
import { postNewAnimalBackend } from '../requests/animalRequests'

function CreateAnimalForm() {
    const [animal, setAnimal] = useState({
        name: "",
        species: "",
        breed: "criollo",
        gender: "",
        age: 0,
        sterilized: false,
        sterilizedCode: " ",
        other: " ",        
    })
    const [imagen, setImagen] = useState(null)
    const handleImageChange = (e) => {
        setImagen(e.target.files[0]) 
    }
    const handleChange = (e) => {
        animal[e.target.name] = e.target.value
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(animal);
        const formData = new FormData();
        const newAnimal = {
            name: animal.name,
            species: animal.species,
            breed: animal.breed,
            gender: animal.gender,
            age: animal.age,
            sterilized: animal.sterilized,
            sterilizedCode: animal.sterilizedCode,
            other: animal.other
        }
        formData.append('bodyJson',JSON.stringify(newAnimal));
        formData.append('image',imagen);
        await postNewAnimalBackend(formData,"perdido")
            .then(answer=>{
                console.log(answer);
            })
            .catch(e=>{
                console.log(e);
            })
    }
return (
    <div className='rounded-lg m-1 p-3 border-4 border-blue-800'>
        <form onSubmit={handleSubmit}>
            <div>
                <label  htmlFor='name'>Nombre</label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='species'>Especie</label>
                <select name="species" id="species" onChange={handleChange}>
                    <option value="">Elige una opción</option>
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option valued="other">Otro</option>
                </select>
            </div>
            <div>
                <label  htmlFor='breed'>Raza</label>
                <input 
                    type='text'
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='gender'>Sexo</label>
                <select name="gender" id="gender" onChange={handleChange}>
                    <option value="">Elige una opción</option>
                    <option value="machito" >machito</option>
                    <option value="hembrita">hembrita</option>
                </select>
            </div>
            <div>
                <label  htmlFor='age'>Edad (años)</label>
                <input 
                    type='number'
                    id='age'
                    name='age'
                    onChange={handleChange}
                />
            </div>
            
            <div>
                <label htmlFor='sterilized'>Esterilizado</label>
                <select name="sterilized" id="sterilized" onChange={handleChange}>
                    <option value="">Elige una opción</option>
                    <option value={true} >Si</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div>
                <label  htmlFor='sterilizedCode'>Código de esterilización</label>
                <input 
                    type='text'
                    id='sterilizedCode'
                    name='sterilizedCode'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='other'>Otra información relevante</label>
                <input 
                    type='text'
                    id='other'
                    name='other'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='date'>Cuándo se perdió?</label>
                <input 
                    type='date'
                    id='date'
                    name='date'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='place'>Dónde se perdió?</label>
                <input 
                    type='text'
                    id='place'
                    name='place'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label  htmlFor='breed'>Sube la fotografía más nitida que tengas del animalito</label>
                <input 
                    type='file'
                    alt='imagen del animalito'
                    id='img'
                    name='Files'
                    accept='image/png, image/jpg'
                    onChange={handleImageChange}
                />
            </div>
            <div className='text-center'>
                <button className='mt-2 border border-black rounded-lg p-1'>Guardar información</button>
            </div>
        </form>
    </div>
  )
}

export default CreateAnimalForm