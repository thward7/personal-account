import FileMarker from '../assets/file-marker.svg'

const FileList = () => {
  return (
    <div className='filelist widget flex flex-col gap-6 text-white'>
      <div className='widget-title'>Files</div>
      <div className='scroll-element flex max-h-[184px] flex-col space-y-2'>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <img src={FileMarker} className='size-3' />
          <div>Working Rules</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <img src={FileMarker} className='size-3' />
          <div>Сommunication</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <img src={FileMarker} className='size-3' />
          <div>Technologies</div>
        </div>
        <div className='list-element flex justify-between bg-own-transparent px-6 py-4 transition-all'>
          <img src={FileMarker} className='size-3' />
          <div>Fines</div>
        </div>
      </div>
    </div>
  )
}

export default FileList
