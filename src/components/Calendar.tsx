const Calendar = () => {
  const date = new Date()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const getDayOfWeek = (date: Date) => {
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1
  }

  const firstDayOfMonth = getDayOfWeek(new Date(currentYear, currentMonth, 1))

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const emptyDays = Array(firstDayOfMonth).fill(null)
  const daysOfMonth = [...emptyDays, ...Array(daysInMonth).keys()].map((day) =>
    day === null ? null : day + 1,
  )

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
    <div className='calendar widget grid grid-cols-2 bg-gradient-to-t from-own-sky to-own-orange text-own-graphit'>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='font-sfpromedium uppercase text-own-blue'>
            {daysOfWeek[date.getDay()]}
          </div>
          <div className='font-sfprosemibold text-[60px] text-own-graphit'>
            {date.getDate()}
          </div>
          <div className='flex space-x-2'>
            <div className='h-auto w-1.5 rounded-lg bg-own-red'></div>
            <div className='flex-col'>
              <div className='font-sfprobold'>Task: name of task</div>
              <div className='font-sfproregular text-own-graphit text-opacity-50'>
                09:00
              </div>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='button-element w-1/3 bg-black bg-opacity-55 py-1 text-sm text-white transition-all hover:bg-own-blue max-[600px]:hidden'
        >
          Add task
        </button>
      </div>
      <div className='flex flex-col space-y-4 max-[600px]:hidden'>
        <div className='font-sfpromedium uppercase text-own-blue'>
          {months[currentMonth]}
        </div>
        <div>
          <div className='grid grid-cols-7 gap-1 font-sfprosemibold text-sm'>
            {days.map((day, index) => (
              <div
                key={index}
                className={`flex size-7 items-center justify-center p-1 ${index < 7 ? 'text-own-graphit text-opacity-50' : 'transition-all hover:text-own-red'} ${day === date.getDate() && 'rounded-full bg-own-blue text-white hover:scale-[1.13] hover:text-white'}`}
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
