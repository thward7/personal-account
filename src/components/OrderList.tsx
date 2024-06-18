const OrderList = () => {
  return (
    <div className='orderlist widget flex flex-col gap-6'>
      <div className='widget-title'>Orders</div>
      <div className='flex flex-col space-y-2'>
        <div className='bg-own-transparent list-element flex justify-between px-6 py-4 transition-all'>
          <div>Company 1</div>
          <div>23.05</div>
        </div>
        <div className='bg-own-transparent list-element flex justify-between px-6 py-4 transition-all'>
          <div>Company 2</div>
          <div>11.05</div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
