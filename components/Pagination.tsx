'use client'
import useCustomeRouter from '@/hooks/useCustomeRouter'
import React from 'react'
import { Button } from "@/components/ui/button"

type Props = {
  totalPage:number,

}

const Pagination = ({totalPage}: Props) => {
  
  const newArrey =[...Array(totalPage)].map((_,i)=>i+1)
  const {pushQuery,query} =useCustomeRouter()
  return (
    <div className='flex gap-[10px] m-[30px,0] '>
      {
        newArrey.map(page=>(
          // <button key={page} onClick={()=>pushQuery({page})} className={(query.page ||1 )===page?'bg-yellow-500':'white'}>
          //   {page}
          // </button>
          <Button key={page} variant="outline" onClick={()=>pushQuery({page})} className={(query.page ||1 )===page?'bg-yellow-500':'white'} > {page}</Button>
        ))
      }
    </div>
  )
}

export default Pagination