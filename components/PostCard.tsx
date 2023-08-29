'use client'
import React,{useTransition} from 'react'
import { useAppContext } from '@/context/appContext'
import { Post } from '@/types/postType'
import Image from 'next/image'
import Link from 'next/link'
import { deletePost } from '@/actions/postActions'

type Props = {
  post:Post
  handleDelete:(postId:string)=>void
}

const PostCard = ({post,handleDelete}: Props) => {
  const {image,title} =post
  let [isPending,startTransition]=useTransition()

  const {setEditPost}=useAppContext()

  // const handleDelete= async(postId:string)=>{
  //   if(window.confirm('Do you want to delete this post')){
  //         await deletePost(postId)
  //   }
  // }
  return (
    <div className='shadow-lg shadow-[#b6cdf3] mb-[15px]'>
      <Link href={`/post/${post._id}`} scroll={false} >
        <Image src={image} alt={title} width={500} height={300}  sizes='100vw' priority />
      </Link>
      {/* <p>{title}</p>
      <div className='flex gap-[20px]'>
        <button onClick={()=>setEditPost(post)}>Edit</button>
        <button disabled={isPending} onClick={()=>startTransition(()=>handleDelete(post._id))}>
          {isPending ? "Loading...":"Delete"}
        </button>
      </div> */}
    </div>
  )
}

export default PostCard