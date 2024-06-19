import { Input, Select, SelectItem } from '@nextui-org/react'
import IconCopy from '../assets/icon-copy.svg'

const OrderGenerator = () => {
  return (
    <div className='ordergenerator widget flex flex-col space-y-5 bg-gradient-to-b from-white to-white text-own-graphit max-[680px]:hidden'>
      <div className='h-4/5 w-full rounded-3xl bg-own-white p-5'>
        <button className='float-end mb-3 ml-3'>
          <img
            src={IconCopy}
            className='size-6 transition-all hover:scale-[1.13]'
          />
        </button>
        <p className='select-text text-justify text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          explicabo reprehenderit nostrum enim at itaque provident expedita, rem
          ratione soluta qui vitae alias fugiat veniam excepturi velit? Eveniet,
          aperiam molestiae!
        </p>
      </div>
      <div className='flex space-x-3'>
        <Select label='Company' className='w-1/4' radius='full'>
          <SelectItem key={'Company 1'}>Company 1</SelectItem>
          <SelectItem key={'Company 2'}>Company 2</SelectItem>
          <SelectItem key={'Company 3'}>Company 3</SelectItem>
          <SelectItem key={'Company 4'}>Company 4</SelectItem>
        </Select>
        <Input
          type='text'
          label='Inventory'
          className='w-2/4'
          radius='full'
          isClearable
        />
        <button className='button-element w-1/4 bg-[#F4F4F5] text-own-graphit transition-all hover:bg-own-blue hover:text-white'>
          Push
        </button>
      </div>
    </div>
  )
}

export default OrderGenerator
