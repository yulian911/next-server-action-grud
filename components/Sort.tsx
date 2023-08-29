'use client'
import useCustomeRouter from '@/hooks/useCustomeRouter'
import React from 'react'

type Props = {}

const Sort = (props: Props) => {
  const {pushQuery,query} =useCustomeRouter()
  return (
    <div>
      Sort:{` `}
      <select value={query.sort || 'createdAt'} onChange={e=>pushQuery({sort:e.target.value})}>
        <option value='createdAt'>A-Z</option>
        <option value='-createdAt'>Z-A</option>
        <option value='title'>Title A-Z</option>
        <option value='-title'>Title Z-A</option>
      </select>
    </div>
  )
}

export default Sort