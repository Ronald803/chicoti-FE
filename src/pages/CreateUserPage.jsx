import React from 'react'
import CreateUserForm from '../components/forms/CreateUserForm'
import { useNavigate } from 'react-router-dom'
import ButtonForm from '../components/atoms/ButtonForm'

function CreateUserPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/user')
  }
  return (
    <div className='flex justify-center'>
      <div className='m-1 w-80 rounded-lg'>
        <div className='p-2 border-2 border-tertiary rounded-lg'>
          <CreateUserForm />
          <hr className='' />
          <ButtonForm buttonText='Ya tengo una cuenta' onClick={handleClick} bg='bg-secondary' />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage