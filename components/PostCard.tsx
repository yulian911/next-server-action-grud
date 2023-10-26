'use client'
import React,{useTransition} from 'react'
import { useAppContext } from '@/context/appContext'
import { Post } from '@/types/postType'
import Image from 'next/image'
import Link from 'next/link'
import { deletePost } from '@/actions/postActions'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import { Heart } from 'lucide-react'
import ButtonLike from './ButtonLike'

type Props = {
  post:Post
  handleDelete:(postId:string)=>void
}

const PostCard = ({post,handleDelete}: Props) => {
  const session =useSession()

  const {image,title,likes,likedBy} =post
  let [isPending,startTransition]=useTransition()

  const {setEditPost}=useAppContext()


  
  // console.log(session?.data?.user.id,post.author)
  return (
    <div className='shadow-lg shadow-[#b6cdf3]  relative group  overflow-hidden'>
      <Link href={`/post/${post._id}`} scroll={false} >
        <Image src={image} alt={title} width={500} height={300}  sizes='100vw' priority />
      </Link>
      {/* <p>{title}</p> */}
     
       <div className='flex gap-[20px] absolute bottom-0 bg-black w-full justify-center items-center p-2 rounded-t-[20px] opacity-0 group-hover:opacity-100  '>
       <div>
        {/* <p>Created By:{post.author}</p> */}
       </div>
       {session?.data?.user.id === post.author ?
            <>
                <Button onClick={()=>setEditPost(post)}>Edit</Button>
                <Button disabled={isPending} onClick={()=>startTransition(()=>handleDelete(post._id))}>
                  {isPending ? "Loading...":"Delete"}
                </Button> 
            </>
      : null
      }
      
       <ButtonLike post={post._id} likes={likes} likedBy={likedBy} author={session?.data?.user}/>
     </div>
  
     
    </div>
  )
}

export default PostCard