import React, { useEffect, useState } from 'react'
import { getAnimalsToFixPhotoBackend } from '../requests/animalRequests'
import FixUrlForm from '../components/forms/FixUrlForm';

function UrlImageFIxerPage() {
    const [allAnimalsToFixPhoto, setAllAnimalsToFixPhoto] = useState([]);
    useEffect(()=>{
        getUrlsToFix()
    },[])
    const getUrlsToFix = async ()=>{
        await getAnimalsToFixPhotoBackend()
            .then( answer=>{
                console.log(answer)
                console.log(answer.data.body)
                setAllAnimalsToFixPhoto(answer.data.body)
            })
            .catch(e=>{ console.log(e) })
    }
    const handleChange = () => {

    }
    const handleSubmit = ()=>{

    }
  return (
    <div>
        {
            allAnimalsToFixPhoto.map(animal=>{
                return (
                    <div className='w-80' id={animal._id}>
                        <FixUrlForm pet={animal}/>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default UrlImageFIxerPage