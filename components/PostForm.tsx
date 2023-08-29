'use client'
import { createPost, updatePost } from '@/actions/postActions'
import { Post } from '@/types/postType'
import React,{useRef} from 'react'
import ButttonSubmit from './ButttonSubmit'
import { useAppContext } from '@/context/appContext'
import { Input } from "@/components/ui/input"


type Props = {}

const PostForm = (props: Props) => {
  const {editPost}=useAppContext()
const formRef =useRef<any>(null)


  async function handleAction(formData:FormData) {


    const title =formData.get('title')
    const image =formData.get('image')
  if(editPost){

    await updatePost({title,image,id:editPost._id})
  }else{
    const data:any ={title,image}
    await createPost(data)
  }
    
    
    formRef.current?.reset()
  }
  return (
    <form ref={formRef} action={handleAction} className='flex gap-[20px] my-[30px] mx-0'>

      <Input name='title' type='text' placeholder='title' required defaultValue={editPost?.title}/>
      <Input name='image' type='text' placeholder='url' required defaultValue={editPost?.image}/>
      
      {/* {editPost ?
      
      
      <ButttonSubmit value='Update'/>
      : */}
      <ButttonSubmit value='Create'/>
    {/* } */}

    </form>
  )
}

export default PostForm