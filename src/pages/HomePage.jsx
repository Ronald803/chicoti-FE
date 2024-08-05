import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/missing')
  },[])
  return (
    <div>
      
    </div>
  )
}

export default HomePage