const Calendar = () => {
  const date = new Date()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const daysOfMonth = [...Array(daysInMonth).keys()].map((day) => day + 1)
  const days = [...daysOfWeek, ...daysOfMonth]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div className='calendar widget text-own-graphit from-own-sky to-own-orange grid grid-cols-2 bg-gradient-to-t'>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='text-own-blue font-sfpromedium uppercase'>
            {daysOfWeek[date.getDay()]}
          </div>
          <div className='text-own-graphit font-sfprosemibold text-[60px]'>
            {date.getDate()}
          </div>
          <div className='flex space-x-2'>
            <div className='bg-own-red h-auto w-1.5 rounded-lg'></div>
            <div className='flex-col'>
              <div className='cursor-pointer font-sfprobold'>
                Task: name of task
              </div>
              <div className='text-own-graphit cursor-pointer font-sfproregular text-opacity-50'>
                09:00
              </div>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='button-element hover:bg-own-blue w-1/3 bg-black bg-opacity-55 py-1 text-sm transition-all'
        >
          Add task
        </button>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='text-own-blue font-sfpromedium uppercase'>
          {months[currentMonth]}
        </div>
        <div>
          <div className='grid grid-cols-7 gap-1 font-sfprosemibold text-sm'>
            {days.map((day, index) => (
              <div
                key={index}
                className={`flex size-7 items-center justify-center p-1 ${index < 7 ? 'text-own-graphit text-opacity-50' : 'hover:text-own-red cursor-pointer transition-all'} ${day === date.getDate() && 'bg-own-blue rounded-full text-white hover:scale-[1.13] hover:text-white'}`}
              >
                {index < 7 ? String(day).charAt(0) : day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
