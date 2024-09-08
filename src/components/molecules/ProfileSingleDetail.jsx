function ProfileSingleDetail(props) {
  return (
    <div className='flex'>
      <div className='pt-1 text-lg'>{props.icon}</div>
      <div className='w-full px-2 '>
        <div>{props.detailInfo}</div>
        <div className='text-xs'>{props.detailTitle}</div>
        <hr />
      </div>
    </div>
  )
}

export default ProfileSingleDetail