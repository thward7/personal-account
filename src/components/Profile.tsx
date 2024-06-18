import IconSettings from '../assets/icon-settings.svg'
import UserAvatar from '../assets/user-pic.jpg'

const Profile = () => {
  return (
    <div className='profile widget flex flex-col justify-between space-y-3'>
      <div className='flex justify-between'>
        <button
          type='submit'
          className='button-element bg-own-transparent scale-animation size-8'
        >
          <img className='size-5' src={IconSettings} />
        </button>
        <img
          className='scale-animation size-36 cursor-pointer overflow-hidden rounded-full object-cover'
          src={UserAvatar}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <div>
          <p className='cursor-pointer font-sfprobold text-2xl'>Budd Dwyer</p>
          <p className='text-own-gray cursor-pointer font-sfproregular text-xs text-opacity-40'>
            johndee@gmail.com
          </p>
        </div>
        <button
          type='submit'
          className='button-element bg-own-transparent hover:bg-own-red w-1/3 px-12 py-1 text-sm transition-all'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
