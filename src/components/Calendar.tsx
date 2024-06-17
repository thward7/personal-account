const Calendar = () => {
  return (
    <div className='calendar widget text-graphit grid grid-cols-2 bg-gradient-to-t from-[#C3D7DB] to-[#FBDABB]'>
      <div className='flex flex-col'>
        <div className='text-vstrecha font-sfpromedium uppercase'>Friday</div>
        <div className='text-graphit font-sfprosemibold text-[60px]'>4</div>
        <div className='flex space-x-2'>
          <div className='h-full w-1.5 rounded-lg bg-[#C59FBA]'></div>
          <div className='flex-col'>
            <div className='cursor-pointer font-sfprobold'>
              Task: name of task
            </div>
            <div className='text-graphit font-sfproregular cursor-pointer text-opacity-50'>
              09:00
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='text-vstrecha font-sfpromedium uppercase'>January</div>
        <div></div>
      </div>
    </div>
  )
}

export default Calendar
