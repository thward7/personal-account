import UserAvatar from '../assets/user-pic.jpg'

const Profile = () => {
  return (
    <div className='profile widget flex aspect-square flex-col justify-between'>
      <div className='flex justify-end'>
        <img
          className='size-44 cursor-pointer overflow-hidden rounded-full object-cover'
          src={UserAvatar}
        />
      </div>
      <div className=''>
        <p className='cursor-pointer font-sfprobold text-2xl'>Budd Dwyer</p>
        <p className='font-sfproregular cursor-pointer text-xs text-[#BEBEBE] text-opacity-40'>
          johndee@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Profile
