import axios from "axios";

const url = 'http://localhost:4000/api/animals/'
export function postNewAnimalBackend(animalData,characteristic){
    return(
        axios.post(
            url+characteristic,
            animalData
            //{headers: { "xtoken": xtk}}
        )
    )
}