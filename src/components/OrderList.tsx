const OrderList = () => {
  return (
    <div className='orderlist widget flex flex-col gap-6'>
      <div className='font-sfprobold text-2xl'>Orders</div>
      <div className='flex flex-col space-y-2'>
        <div className='flex cursor-pointer justify-between rounded-full bg-black bg-opacity-30 px-6 py-4 transition-all hover:bg-[#77b6d395]'>
          <div>Company 1</div>
          <div>23.05</div>
        </div>
        <div className='flex cursor-pointer justify-between rounded-full bg-black bg-opacity-30 px-6 py-4 transition-all hover:bg-[#77b6d395]'>
          <div>Company 2</div>
          <div>07.05</div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
