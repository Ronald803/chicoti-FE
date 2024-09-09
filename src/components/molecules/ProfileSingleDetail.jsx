function ProfileSingleDetail(props) {
  return (
    <div className='flex py-0.5'>
      <div className='pt-1 text-lg'>{props.icon}</div>
      <div className='w-full px-2 '>
        <div className="text-justify">{props.detailInfo}</div>
        <div className='text-xs font-semibold'>{props.detailTitle}</div>
        <hr />
      </div>
    </div>
  )
}

export default ProfileSingleDetail