import React from 'react'
import SearchForm from './SearchForm'
import Sort from './Sort'

type Props = {}

const Feature = (props: Props) => {
  return (
    <div className='flex gap-[20px] m-[30,0]'>
      <SearchForm/>
      <Sort/>
    </div>
  )
}

export default Feature