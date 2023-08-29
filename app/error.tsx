'use client'
import React from 'react'

type Props = {
  error:any,
  reset:any
}

const error = ({error,reset}: Props) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default error