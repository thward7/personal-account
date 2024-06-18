const FileList = () => {
  return (
    <div className='filelist widget flex flex-col gap-6'>
      <div className='widget-title'>Files</div>
      <div className='flex flex-col space-y-2'>
        <div className='bg-own-transparent list-element flex justify-between px-6 py-4 transition-all'>
          <div className='bg-own-red size-3 rounded-full' />
          <div>Working Rules</div>
        </div>
      </div>
    </div>
  )
}

export default FileList
