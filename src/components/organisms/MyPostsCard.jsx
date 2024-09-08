import React, { useEffect, useState } from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import { getMyAnimalPosts } from '../../requests/animalRequests'
import SinglePost from '../molecules/SinglePost'

function MyPostsCard() {
  const [myPosts, setMyPosts] = useState([])
  const navigate = useNavigate()
  const goToRegisterPet = () => {
    navigate('/registerpet')
  }
  useEffect(() => {
    getMyPosts()
  }, [])
  const getMyPosts = async () => {
    const ans = await getMyAnimalPosts()
    setMyPosts(ans.data.body)
  }
  return (
    <div className='my-1 p-2 border-2 border-tertiary rounded-lg'>
      <div className='flex '>
        <div className='w-1/2 px-2 text-primary font-bold'>
          Mis publicaciones
        </div>
        <div className='w-1/2'>
          <PrimaryButton buttonText="Publicar 🐶😸" onClick={goToRegisterPet} />
        </div>
      </div>
      <div className='py-2'>
        <hr/>
        <hr/>
        <hr/>
      </div>
      <div>
        {myPosts.map((post, index) => (
          <SinglePost key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default MyPostsCard