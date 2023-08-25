import { Post } from '@/types/postType'
import React from 'react'
import PostCard from './PostCard'

type Props = {
  posts:Post[]
}

const PostList = ({posts}: Props) => {

  return (
    <div className='flex gap-[20px] flex-wrap'>
      {posts.map(post=>(
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostList