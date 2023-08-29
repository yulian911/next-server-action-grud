'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname,useSearchParams } from 'next/navigation'
import useCustomeRouter from '@/hooks/useCustomeRouter'

type Props = {
  children:React.ReactNode
}

const Modal = ({children}: Props) => {
  const pathname =usePathname()
  const{query}=useCustomeRouter()



  if(pathname==='/') return null

  return (
    <div>
      <Link href={`/`} className='modal' scroll={false} />
      {children}
    </div>
  )
}

export default Modal