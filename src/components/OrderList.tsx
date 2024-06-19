const OrderList = () => {
  return (
    <div className='orderlist widget flex flex-col gap-6 text-white'>
      <div className='widget-title'>Orders</div>
      <div className='scroll-element flex max-h-[510px] flex-col space-y-2'>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <div>Company 1</div>
          <div>23.05</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <div>Company 2</div>
          <div>11.05</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <div>Company 3</div>
          <div>01.12</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <div>Company 4</div>
          <div>12.04</div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
