import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton';
import ProfileSingleDetail from '../molecules/ProfileSingleDetail';

function MyContactInformationCard(props) {
  const logOut = () => {
    props.setIsLogged(false)
    localStorage.setItem('n', "");
    localStorage.setItem('t', "");
    localStorage.setItem('r', "");
    localStorage.setItem('c', "");
    localStorage.setItem('e', "");
  }
  return (
    <div className='my-1 p-2 border-2 border-tertiary rounded-lg'>
      <div className='flex'>
        <div className='w-1/2 px-2 text-primary font-bold'>
          Mi información de contacto
        </div>
        <div className='w-1/2'>
          <PrimaryButton buttonText="Cerrar sesión" onClick={logOut} />
        </div>
      </div>
      <ProfileSingleDetail icon='👤' detailTitle='Nombre' detailInfo={props.userName} />
      <ProfileSingleDetail icon='📞' detailTitle='Celular' detailInfo={props.userCellphone} />
      <ProfileSingleDetail icon='📨' detailTitle='Correo Electrónico' detailInfo={props.userEmail} />
    </div>
  )
}

export default MyContactInformationCard