import React, { useEffect, useState } from 'react'
import ProfileSingleDetail from './ProfileSingleDetail'
import SecondaryButton from '../atoms/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import { deleteAnimalPost } from '../../requests/animalRequests'
import errorAlert from '../../alerts/errorAlert'
import successAlert from '../../alerts/successAlert'
import buttonAlert from '../../alerts/buttonAlert'

function SinglePost(props) {
  const [characteristic, setCharacteristic] = useState('')
  useEffect(() => {
    if (props.post.characteristic == 'missing') {
      setCharacteristic('Perdido')
    } else if (props.post.characteristic == 'found') {
      setCharacteristic('Encontrado')
    } else if (props.post.characteristic == 'homeless') {
      setCharacteristic('En adopción')
    } else {
      setCharacteristic(props.post.characteristic)
    }
  }, [])
  const navigate = useNavigate()
  const goToPetDetailPage = () => {
    const stringPet = JSON.stringify(props.post);
    localStorage.setItem('pet', stringPet)
    navigate(`/${props.post.characteristic}/${props.post._id}`)
  }
  const handleDelete = () => {
    buttonAlert({
      title: 'Chicoti',
      message: 'Se eliminará la publicación del peludito que elegiste',
      next: deletePet
    })
  }
  const deletePet = () => {
    deleteAnimalPost(props.post._id)
      .then(answer => {
        successAlert('Publicación eliminada')
        setTimeout(() => {
          window.location.reload()
        }, 2500);
      })
      .catch(e => {
        errorAlert(e.response.data.error)
      })
  }
  return (
    <div>
      <div className='flex'>
        <div className='w-1/3'>
          <img className='w-full' src={props.post.photoUrlOfficial} />
        </div>
        <div className='w-2/3 px-2'>
          <div>
            <ProfileSingleDetail icon='🐾' detailTitle='Nombre' detailInfo={props.post.petName} />
            <ProfileSingleDetail icon='📓' detailTitle='Condición' detailInfo={characteristic} />
          </div>
          <div>
            <SecondaryButton buttonText='Ver' onClick={goToPetDetailPage} />
            <SecondaryButton buttonText='Eliminar' onClick={handleDelete} />
          </div>
        </div>
      </div>
      <div className='py-2'>
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  )
}

export default SinglePost