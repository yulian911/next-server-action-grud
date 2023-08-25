import { getAllPost } from '@/actions/postActions'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import Image from 'next/image'

export default async function Home() {
  const {posts} =await getAllPost()
  console.log(posts)
  
  return (
    <main className="flex flex-col min-h-screen">
    <PostForm/>
    

    {posts ?<PostList posts={posts}/>:<div>Pots not exist</div> }
   
    </main>
  )
}
