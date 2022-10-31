import { Icon } from '@iconify-icon/react'

export default function Loading() {
  return (
    <div className="loading w-full h-full grid place-content-center">
      <div className='w-full h-full bg-slate-100 grid place-content-center'>
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <h2 style={{ textAlign: 'center' }}>Loading...</h2>
    </div>
  )
}