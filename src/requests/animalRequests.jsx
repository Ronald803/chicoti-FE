import axios from "axios";

const url = 'http://localhost:4000/api/animals/'
const t = sessionStorage.getItem('t')

export function postNewAnimalBackend(animalData,characteristic){
    console.log(animalData);
    return(
        axios.post(
            url+characteristic,
            animalData,
            {headers: { "xtoken": t}}
        )
    )
}
export function getAnimalsBackend(){
    return axios.get(url)
}

export function getAnimalsToFixPhotoBackend(){
    return axios.get(`${url}?photoUrlOfficial= &&`)
}