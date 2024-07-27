import React from 'react'

function AboutUs() {
  const member = 
    {
      name: 'Pamela',
      imageUrl: './pame-photo.jpg',
      descriptionOne: 'Chicoti es una aplicación creada por la Fundación Pamelita, una organización sin fines de lucro dedicada a continuar la noble labor de Pamela, quien amó profundamente a los animales y dedicó su vida a ayudarlos. La fundación busca honrar su memoria y perpetuar su legado.',
      descriptionTwo: 'Esta app fue concebida por Pamela y desarrollada con el objetivo de facilitar la adopción de mascotas, encontrar animales perdidos y proporcionar un hogar temporal a aquellos que lo necesiten. Chicoti es una herramienta que permite a los usuarios conectar con mascotas que buscan un hogar amoroso, así como colaborar en la misión de proteger y cuidar a los animales.'
    }
  return (
  <div className="px-2 pb-4">
    <div className="text-center py-1">
      <h2 className=" font-bold text-primary">Fundación Pamelita</h2>
    </div>
    <div className='text-sm text-justify'>
      <p>{member.descriptionOne}</p>
    </div>
    <div className="flex pt-2">
      <img
        className="w-40 rounded-full mx-auto object-cover"
        src={member.imageUrl}
        alt={`${member.name}`}
      />
      <div className="px-2 text-sm text-justify">
        <p>{member.descriptionTwo}</p>
        <p className='pt-4 font-semibold' >Brilla alto, brilla siempre Pamelita...</p>
      </div>
    </div>
  </div>

  )
}

export default AboutUs