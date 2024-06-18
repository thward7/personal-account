import LinkButton from '../assets/link.svg'

const Schedule = () => {
  return (
    <div className='timetable widget'>
      <div className='flex items-center justify-between'>
        <div className='font-sfprobold text-2xl'>Work Schedule</div>
        <div className='flex size-8 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-30 transition-all hover:scale-[1.13]'>
          <img className='size-4' src={LinkButton} />
        </div>
      </div>
    </div>
  )
}

export default Schedule
