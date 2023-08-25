'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type Props = {
  value:string
}

const ButttonSubmit = ({value}: Props) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type='submit'>{ pending ? 'Loading...' : value}</button>
  )
}

export default ButttonSubmit