import UserAvatar from '../assets/user-pic.jpg'
import Clock from './Clock'

const Header = () => {
  return (
    <div className='flex w-full items-center justify-between px-3 py-2 text-2xl shadow-md backdrop-blur-lg backdrop-brightness-125'>
      <div className='cursor-pointer font-retrosailing text-white'>4+.*</div>
      <Clock />
      <img
        className='size-8 cursor-pointer overflow-hidden rounded-full object-cover'
        src={UserAvatar}
      />
    </div>
  )
}

export default Header
