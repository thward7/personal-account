import UserAvatar from '../assets/user-pic.jpg'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-3 py-2 text-2xl backdrop-brightness-125'>
      <div className='cursor-pointer font-retrosailing'>4+.*</div>
      <img
        className='size-8 cursor-pointer overflow-hidden rounded-full object-cover'
        src={UserAvatar}
      />
    </div>
  )
}

export default Header
