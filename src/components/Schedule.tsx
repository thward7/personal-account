import LinkButton from '../assets/link.svg'

const Schedule = () => {
  return (
    <div className='timetable widget flex flex-col gap-6 text-white'>
      <div className='flex items-center justify-between'>
        <div className='widget-title'>Work Schedule</div>
        <button
          type='submit'
          className='button-element scale-animation size-8 bg-own-transparent'
        >
          <img className='size-4' src={LinkButton} />
        </button>
      </div>
      <div className='grid space-y-2'>
        <div className='grid grid-cols-4 px-3 text-center text-sm text-own-gray'>
          <div>Employee</div>
          <div>Rate ($/hour)</div>
          <div>Hours</div>
          <div>Salary ($)</div>
        </div>
        <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center'>
          <div>J. Carter</div>
          <div>43</div>
          <div>65</div>
          <div>2785</div>
        </div>
        <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center'>
          <div>K. Frazier</div>
          <div>12</div>
          <div>88</div>
          <div>1056</div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
