import React, { useState } from 'react'

function CreateAnimalForm() {
    const [animal, setAnimal] = useState({
        name: "",
        species: "",
        age: 0,
        breed: "criollo",
        sterilized: false,
        sterilizedCode: " ",
        other: " ",        
    })
    const handleChange = (e) => {
        animal[e.target.name] = e.target.value
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(animal);
    }
return (
    <div>
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
                <input 
                    type='text'
                    id='species'
                    name='species'
                    onChange={handleChange}
                />
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
                <label  htmlFor='breed'>Raza</label>
                <input 
                    type='text'
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                />
            </div>
            <div>
                <fieldset>
                    <legend>El animalito está esterilizado?</legend>
                    <label><input name="sterilized" onChange={handleChange} id="true" type="radio"/>Esterilizado</label>
                </fieldset>
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
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Guardar información</button>
            </div>
        </form>
    </div>
  )
}

export default CreateAnimalForm