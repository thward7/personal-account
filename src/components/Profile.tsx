import IconSettings from '../assets/icon-settings.svg'
import UserAvatar from '../assets/user-pic.jpg'

const Profile = () => {
  return (
    <div className='profile widget flex flex-col justify-between space-y-3'>
      <div className='flex justify-between'>
        <button
          type='submit'
          className='button-element scale-animation size-8 bg-own-transparent'
        >
          <img className='size-5' src={IconSettings} />
        </button>
        <img
          className='scale-animation size-36 overflow-hidden rounded-full object-cover'
          src={UserAvatar}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <div>
          <p className='font-sfprobold text-2xl text-white'>Budd Dwyer</p>
          <p className='font-sfproregular text-xs text-own-gray text-opacity-40'>
            johndee@gmail.com
          </p>
        </div>
        <button
          type='submit'
          className='button-element w-1/3 bg-own-transparent px-12 py-1 text-sm text-white transition-all hover:bg-own-red'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
