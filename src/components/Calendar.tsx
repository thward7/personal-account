const Calendar = () => {
  const date = new Date() // Создаем новый объект Date
  const currentMonth = date.getMonth() // Получаем текущий месяц
  const currentYear = date.getFullYear() // Получаем текущий год

  // Получаем количество дней в текущем месяце
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
  const daysOfMonth = [...Array(daysInMonth).keys()].map((day) => day + 1) // Создаем массив из дней текущего месяца
  const days = [...daysOfWeek, ...daysOfMonth]

  // Создаем массив с названиями месяцев
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
    <div className='calendar widget grid grid-cols-2 bg-gradient-to-t from-[#C3D7DB] to-[#FBDABB] text-graphit'>
      <div className='flex flex-col'>
        <div className='font-sfpromedium uppercase text-vstrecha'>
          {daysOfWeek[date.getDay()]}
        </div>
        <div className='font-sfprosemibold text-[60px] text-graphit'>
          {date.getDate()}
        </div>
        <div className='flex space-x-2'>
          <div className='h-full w-1.5 rounded-lg bg-[#C59FBA]'></div>
          <div className='flex-col'>
            <div className='cursor-pointer font-sfprobold'>
              Task: name of task
            </div>
            <div className='cursor-pointer font-sfproregular text-graphit text-opacity-50'>
              09:00
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='font-sfpromedium uppercase text-vstrecha'>
          {months[currentMonth]}
        </div>
        <div>
          <div className='grid grid-cols-7 gap-1 font-sfprosemibold text-sm'>
            {days.map((day, index) => (
              <div
                key={index}
                className={`flex size-7 items-center justify-center p-1 ${index < 7 ? 'text-graphit text-opacity-50' : 'cursor-pointer transition-all hover:scale-125'} ${day === date.getDate() && 'rounded-full bg-vstrecha text-white'}`}
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
