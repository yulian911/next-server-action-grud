'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"

type Props = {
  value:string
}

const ButttonSubmit = ({value}: Props) => {
  const { pending } = useFormStatus()
  return (
    <>
    
    <Button variant="outline" disabled={pending} type='submit'>{ pending ? 'Loading...' : value}</Button>
    
    </>
    )
}

export default ButttonSubmit