'use client'
import useCustomeRouter from '@/hooks/useCustomeRouter'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {}

const Sort = (props: Props) => {
  const {pushQuery,query} =useCustomeRouter()
  return (
    <div>
      {/* Sort:{` `}
      <select value={query.sort || 'createdAt'} onChange={e=>pushQuery({sort:e.target.value})}>
        <option value='createdAt'>A-Z</option>
        <option value='-createdAt'>Z-A</option>
        <option value='title'>Title A-Z</option>
        <option value='-title'>Title Z-A</option>
      </select> */}
      <Select  value={query.sort || 'createdAt'} onValueChange={value=>pushQuery({sort:value})} >
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Sort" />
  </SelectTrigger>
  <SelectContent   >
    <SelectItem value='createdAt'>A-Z</SelectItem>
    <SelectItem value='-createdAt'>Z-A</SelectItem>
    <SelectItem value='title'>Title A-Z</SelectItem>
    <SelectItem value='-title'>Title Z-A</SelectItem>
  </SelectContent>
</Select>
    </div>
  )
}

export default Sort