import React from 'react'

function OneLineLabelSelect() {
  return (
<div className='flex pt-1'>
    <label className='w-1/3' htmlFor='species'>Especie</label>
    <select className='w-2/3 rounded-lg border border-tertiary' name="species" id="species" onChange={handleChange}>
        <option value="">Elige una opción</option>
        <option value="dog">Perro</option>
        <option value="cat">Gato</option>
        <option value="other">Otro</option>
    </select>
</div>
  )
}

export default OneLineLabelSelect