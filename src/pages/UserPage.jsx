import React, { useEffect, useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import ButtonForm from '../components/atoms/ButtonForm'
import { useNavigate } from 'react-router-dom'
import MyContactInformationCard from '../components/organisms/MyContactInformationCard'
import MyPostsCard from '../components/organisms/MyPostsCard'

function UserPage() {
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState(null)
  const [userCellphone, setUserCellphone] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [token, setToken] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const t = localStorage.getItem('t') || { length: 0 }
    if (t.length > 0) {
      setIsLogged(true)
      setToken(t)
      setUserName(localStorage.getItem('n'))
      setUserCellphone(localStorage.getItem('c'))
      setUserEmail(localStorage.getItem('e'))
    }
  }, [])
  const goToNewUserPage = () => {
    navigate('/new-user')
  }
  return (
    <div className='flex justify-center'>
      <div className='w-80'>
        <div className=' bg-white'>
          {
            isLogged
              ?
              <div className=''>
                <MyContactInformationCard setIsLogged={setIsLogged} userName={userName} userCellphone={userCellphone} userEmail={userEmail} />
                <MyPostsCard/>
              </div>
              :
              <div>
                <div className='my-1 p-3 border-2 border-tertiary rounded-lg'>
                  <LoginForm />
                  <hr className='' />
                  <ButtonForm buttonText='No tengo cuenta' onClick={goToNewUserPage} bg='bg-secondary' />
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default UserPage