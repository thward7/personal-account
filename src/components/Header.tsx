import UserAvatar from '../assets/user-pic.jpg'
import Clock from './Clock'

const Header = () => {
  return (
    <div className='flex w-full items-center justify-between px-3 py-2 font-sfpromedium text-2xl text-own-graphit shadow-md backdrop-blur-lg backdrop-brightness-125'>
      {/* <div className='font-retrosailing'>+.*</div> */}
      <Clock />
      <button>
        <img
          className='size-8 overflow-hidden rounded-full object-cover'
          src={UserAvatar}
        />
      </button>
    </div>
  )
}

export default Header
