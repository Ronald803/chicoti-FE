import axios from "axios";

//const url = 'http://localhost:4000/api/animals/'
const url = 'https://chicoti-be.vercel.app/api/animals/'
const t = localStorage.getItem('t')

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
export function getAnimalsBackend(characteristic){
    let newUrl = url;
    if(characteristic){newUrl = newUrl + `?characteristic=${characteristic}`}
    return axios.get(newUrl)
}

export function getAnimalsToFixPhotoBackend(){
    return axios.get(`${url}?photoUrlOfficial= &&`)
}

export function updateUrlPhotoBackend(petId,body){
    return(
        axios.put(
            url+petId,
            body,
            {headers: { "xtoken": t}}
        )
    )
}

export function getAnimalsByQueryBackend(query){
    return axios.get(`${url}?${query}`)
}

export function notificateAnimalOwner(petInfo){
    return (
        axios.put(
            url+'notification/',
            petInfo,
            {headers: { "xtoken": t}}
        )
    )
}

export function getMyAnimalPosts(){
    return axios.get(
        url + 'my-posts',
        {headers: { "xtoken": t}}
    )
}

export function deleteAnimalPost(petId){
    return axios.put(
        url + petId,
        {characteristic: 'Publicación eliminada'},
        {headers: { "xtoken": t}},
    )
}