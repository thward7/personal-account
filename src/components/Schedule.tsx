import LinkButton from '../assets/icon-link.svg'

const Schedule = () => {
  return (
    <div className='timetable widget flex flex-col gap-6 text-white'>
      <div className='flex items-center justify-between'>
        <div className='widget-title max-[400px]:text-xl'>Work Schedule</div>
        <button
          type='submit'
          className='button-element scale-animation size-8 bg-own-transparent'
        >
          <img className='size-4' src={LinkButton} />
        </button>
      </div>
      <div className='grid space-y-2'>
        <div className='grid grid-cols-4 px-3 text-center text-sm text-own-gray max-[550px]:hidden'>
          <div>Employee</div>
          <div>Rate ($/hour)</div>
          <div>Hours</div>
          <div>Salary ($)</div>
        </div>
        <div className='scroll-element max-h-[161px] space-y-2'>
          <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center max-[520px]:grid-cols-2'>
            <div>E. Wright</div>
            <div className='max-[520px]:hidden'>43</div>
            <div className='max-[520px]:hidden'>65</div>
            <div>2795</div>
          </div>
          <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center max-[520px]:grid-cols-2'>
            <div>A. Young</div>
            <div className='max-[520px]:hidden'>12</div>
            <div className='max-[520px]:hidden'>88</div>
            <div>1056</div>
          </div>
          <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center max-[520px]:grid-cols-2'>
            <div>T. Curry</div>
            <div className='max-[520px]:hidden'>21</div>
            <div className='max-[520px]:hidden'>92</div>
            <div>1932</div>
          </div>
          <div className='list-element grid grid-cols-4 rounded-full bg-own-transparent p-3 text-center max-[520px]:grid-cols-2'>
            <div>O. Jackson</div>
            <div className='max-[520px]:hidden'>14</div>
            <div className='max-[520px]:hidden'>76</div>
            <div>1064</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
