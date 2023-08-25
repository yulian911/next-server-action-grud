'use client'
import { useAppContext } from '@/context/appContext'
import { Post } from '@/types/postType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  post:Post
}

const PostCard = ({post}: Props) => {
  const {image,title} =post

  const {setEditPost}=useAppContext()
  return (
    <div>
      <Link href={'/'} >
        <Image src={image} alt={title} width={200} height={200} />
      </Link>
      <p>{title}</p>
      <div className='flex gap-[20px]'>
        <button onClick={()=>setEditPost(post)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default PostCard