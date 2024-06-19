import IconMarker from '../assets/icon-marker.svg'

const Messages = () => {
  return (
    <div className='messages widget flex flex-col gap-6 bg-gradient-to-b from-white to-white text-own-graphit'>
      <div className='flex items-center justify-between'>
        <div className='widget-title'>Incoming</div>
        <button
          type='submit'
          className='button-element scale-animation size-8 bg-own-red text-sm text-white'
        >
          14
        </button>
      </div>
      <div className='scroll-element flex max-h-[179px] flex-col space-y-2 text-sm'>
        <div className='list-element flex gap-x-5 bg-own-white px-6 py-4 text-own-graphit'>
          <img src={IconMarker} className='size-3' />
          {/* <div className='bg-own-blue h-3 w-[21px] rounded-full' /> ? */}
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
        <div className='list-element flex gap-x-5 bg-own-white px-6 py-4 text-own-graphit'>
          <img src={IconMarker} className='size-3' />
          {/* <div className='bg-own-blue h-3 w-[21px] rounded-full' /> ? */}
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
        <div className='list-element flex gap-x-5 bg-own-white px-6 py-4 text-own-graphit'>
          <img src={IconMarker} className='size-3' />
          {/* <div className='bg-own-blue h-3 w-[21px] rounded-full' /> ? */}
          <div className=''>unknown@gmail.com</div>
          <div className='truncate'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, porro.
          </div>
          <div>14.04</div>
        </div>
        <div className='list-element flex gap-x-5 bg-own-white px-6 py-4 text-own-graphit'>
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
