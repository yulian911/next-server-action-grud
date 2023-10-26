'use client'
import React from 'react'
import ButttonSubmit from './ButttonSubmit'
import useCustomeRouter from '@/hooks/useCustomeRouter'
import { Input } from './ui/input'

type Props = {}

const SearchForm = (props: Props) => {

  const {pushQuery,query} =useCustomeRouter()

  const handleSearch=async(formData:FormData)=>{
      const search =formData.get('search')
      pushQuery({search,page:1})
  }

  return (
    <form action={handleSearch} className='flex gap-4'>
      <Input type="search" name='search' placeholder='Search...' defaultValue={query.search ||''}/>
      <ButttonSubmit value='search'/>
    </form>
  )
}

export default SearchForm