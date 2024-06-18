import IconMarker from '../assets/icon-marker.svg'

const Messages = () => {
  return (
    <div className='messages widget text-own-graphit flex flex-col gap-6 bg-gradient-to-b from-white to-white'>
      <div className='flex items-center justify-between'>
        <div className='widget-title'>Incoming</div>
        <button
          type='submit'
          className='button-element scale-animation bg-own-red size-8 text-sm'
        >
          14
        </button>
      </div>
      <div className='flex flex-col space-y-2 text-sm'>
        <div className='list-element text-own-graphit bg-own-white flex gap-x-5 px-6 py-4'>
          <img src={IconMarker} className='size-3' />
          {/* <div className='bg-own-blue h-3 w-[21px] rounded-full' /> ? */}
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
        <div className='list-element bg-own-white text-own-graphit flex gap-x-5 px-6 py-4'>
          <img src={IconMarker} className='size-3' />
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
