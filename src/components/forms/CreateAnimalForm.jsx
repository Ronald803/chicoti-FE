import React, { useState } from 'react'
import { postNewAnimalBackend } from '../../requests/animalRequests'
import OneLineLabelInput from '../molecules/OneLineLabelInput'
import OneLineLabelSelect from '../molecules/OneLineLabelSelect'

function CreateAnimalForm() {
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
        cellphone: " ",
        place: " ",
        color: " ",
        characteristic: "perdido"
    })
    const [imagen, setImagen] = useState(null)
    const handleImageChange = (e) => {
        e.preventDefault();
        setImagen(e.target.files[0]) 
    }
    const handleChange = (e) => {
        animal[e.target.name] = (e.target.value)
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
            cellphones: [animal.cellphone]
        }
        console.log(newAnimal);
        formData.append('bodyJson',JSON.stringify(newAnimal));
        formData.append('image',imagen);
        await postNewAnimalBackend(formData,animal.characteristic)
            .then(answer=>{
                console.log(answer);
            })
            .catch(e=>{
                console.log(e);
            })
    }
return (
    <div className='flex items-center justify-center text-sm'>
        <div className='m-2 border-2 border-black rounded-lg min-w-96'>
            <h4 className='text-center bg-secondary py-2 text-white'>Llena el siguiente formulario</h4>
            <div className='p-4 '>
                <form onSubmit={handleSubmit}>
                    <OneLineLabelInput id='name' type='text' name='Nombre' onChange={handleChange} />
                    <OneLineLabelSelect id='characteristic' name='Situación' handleChange={handleChange}
                        options={[{value:'perdido',name:'Perdid@'},{value:'encontrado',name:'Encontrad@'},{value:'sin-hogar',name:'En adopción'}]}
                    />
                    <OneLineLabelSelect id='species' name='Especie' handleChange={handleChange}
                        options={[{value:'dog',name:'Perro'},{value:'cat',name:'Gato'},{value:'other',name:'Otro'}]}
                    />
                    <OneLineLabelInput id='breed' type='text' name='Raza' onChange={handleChange} />
                    <OneLineLabelSelect id='gender' name='Sexo' handleChange={handleChange}
                        options={[{value:'male',name:'Machito'},{value:'female',name:'Hembrita'}]}
                    />
                    <OneLineLabelInput id='color' type='text' name='Color' onChange={handleChange} />
                    <OneLineLabelInput id='age' type='number' name='Edad (años)' onChange={handleChange} />
                    <OneLineLabelSelect id='sterilized' name='Esterilizado' handleChange={handleChange}
                        options={[{value:true,name:'Si'},{value:false,name:'No'}]}
                    />
                    <OneLineLabelInput id='sterilizedCode' type='text' name='Código de esterilización' onChange={handleChange} />
                    <OneLineLabelInput id='other' type='text' name='Otra información relevante' onChange={handleChange} />
                    <OneLineLabelInput id='date' type='date' name='Cuándo?' onChange={handleChange} />
                    <OneLineLabelInput id='place' type='text' name='Dónde?' onChange={handleChange} />
                    <OneLineLabelInput id='cellphone' type='number' name='Celular' onChange={handleChange} />
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