import React, { useState } from 'react'
import { postNewAnimalBackend } from '../../requests/animalRequests'
import OneLineLabelInput from '../molecules/OneLineLabelInput'
import OneLineLabelSelect from '../molecules/OneLineLabelSelect'
import successAlert from '../../alerts/successAlert'
import { useNavigate } from 'react-router-dom'
import errorAlert from '../../alerts/errorAlert'
import optionsArrays from '../../modules/optionsArrays'

function CreateAnimalForm() {
    const navigate = useNavigate()
    const [animal, setAnimal] = useState({
        name: " ",
        species: " ",
        breed: "criollo",
        gender: " ",
        age: 0,
        other: " ",
        cellphone: " ",
        color: " ",
        characteristic: "missing",
        city: " "
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const newAnimal = {
            petName: animal.name,
            species: animal.species,
            breed: animal.breed,
            gender: animal.gender,
            age: animal.age,
            other: animal.other,
            color: animal.color,
            cellphones: [animal.cellphone],
            city: animal.city,
        }
        console.log(newAnimal);
        formData.append('bodyJson', JSON.stringify(newAnimal));
        formData.append('image', imagen);
        const answer = await postNewAnimalBackend(formData, animal.characteristic)
        if (answer.status == 200) {
            successAlert('Peludit@ registrado correctamente')
            setTimeout(() => {
                navigate(`/${animal.characteristic}`)
            }, 3000)
        } else {
            errorAlert('Algo salió mal, vuelve a intentarlo por favor');
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }
    }
    return (
        <div className='flex items-center justify-center text-sm'>
            <div className='m-2 border-2 border-black rounded-lg min-w-96'>
                <h4 className='text-center bg-secondary py-2 text-white'>Llena el siguiente formulario</h4>
                <div className='p-4 '>
                    <form onSubmit={handleSubmit}>
                        <OneLineLabelInput id='name' type='text' name='Nombre' onChange={handleChange} />
                        <OneLineLabelSelect id='characteristic' name='Situación' handleChange={handleChange}
                            options={optionsArrays.characteristics}
                        />
                        <OneLineLabelSelect id='species' name='Especie' handleChange={handleChange}
                            options={optionsArrays.species}
                        />
                        <OneLineLabelSelect id='gender' name='Sexo' handleChange={handleChange}
                            options={optionsArrays.genders}
                        />
                        <OneLineLabelSelect id='city' name='Ciudad' handleChange={handleChange}
                            options={optionsArrays.cities}
                        />
                        <OneLineLabelInput id='breed' type='text' name='Raza' onChange={handleChange} />
                        <OneLineLabelInput id='color' type='text' name='Color' onChange={handleChange} />
                        <OneLineLabelInput id='age' type='number' name='Edad (años)' onChange={handleChange} />
                        <OneLineLabelInput id='other' type='text' name='Otra información relevante' onChange={handleChange} />
                        <OneLineLabelInput id='cellphone' type='number' name='Celular' onChange={handleChange} />
                        <div>
                            <label htmlFor='img'>Sube la fotografía más nitida que tengas del animalito</label>
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