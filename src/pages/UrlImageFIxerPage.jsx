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
        <div>https://www.labnol.org/embed/google/drive/</div>
        {
            allAnimalsToFixPhoto.map(animal=>{
                return (
                    <div className='flex items-center justify-center'>
                        <div className='' id={animal._id} style={{"width":"380px"}}>
                            <FixUrlForm pet={animal}/>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default UrlImageFIxerPage