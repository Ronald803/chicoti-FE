const optionsArrays = {
  characteristics: [
    { value: 'missing', name: 'Perdid@' },
    { value: 'found', name: 'Encontrad@' },
    { value: 'homeless', name: 'En adopción' }
  ],
  species: [
    { value: 'dog', name: 'Perro' },
    { value: 'cat', name: 'Gato' },
    { value: 'other', name: 'Otro' }
  ],
  genders: [
    { value: 'machito', name: 'machito' },
    { value: 'hembrita', name: 'hembrita' }
  ],
  cities: [
    { value: 'La Paz', name: 'La Paz' },
    { value: 'El Alto', name: 'El Alto' },
    { value: 'Otro', name: 'Otro' }
  ],
  footer: [
    { optionName: "Buscar 🔎", optionPath: "/search" },
    { optionName: "Mi cuenta 👤", optionPath: "/user" },
    { optionName: "Nosotros", optionPath: "/aboutus" }
  ],
  navbar: [
    { optionName: "Perdidos", optionPath: "/missing" },
    { optionName: "Encontrados", optionPath: "/found" },
    { optionName: "Sin Hogar", optionPath: "/homeless" }
  ],
}

export default optionsArrays;