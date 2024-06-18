import EmailMarker from '../assets/email-marker.svg'

const Messages = () => {
  return (
    <div className='messages widget flex flex-col gap-6 bg-gradient-to-b from-white to-white text-graphit'>
      <div className='flex items-center justify-between'>
        <div className='font-sfprobold text-2xl'>Incoming</div>
        <div className='size-8 cursor-pointer content-center rounded-full bg-[#BE5858] text-center font-sfpromedium text-sm text-white transition-all hover:scale-[1.13]'>
          14
        </div>
      </div>
      <div className='flex flex-col space-y-2 text-sm'>
        <div className='flex cursor-pointer items-center gap-x-5 rounded-full bg-[#EFF5FC] px-6 py-4 text-graphit transition-all hover:invert-[0.08]'>
          <img src={EmailMarker} className='size-3' />
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
        <div className='flex cursor-pointer items-center gap-x-5 rounded-full bg-[#EFF5FC] px-6 py-4 text-graphit transition-all hover:invert-[0.08]'>
          <img src={EmailMarker} className='size-3' />
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
      </div>
    </div>
  )
}

export default Messages
