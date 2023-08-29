import { getAllPost } from '@/actions/postActions'
import Feature from '@/components/Feature'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import Pagination from '@/components/Pagination'
import Image from 'next/image'
import { DialogTrigger } from '@/components/ui/dialog'

export default async function Home({params,searchParams}:any) {
  const {posts,totalPage,count} =await getAllPost(searchParams)
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
    <PostForm/>
    <Feature/>
    
    <div className='gallery'>
       {posts ?<PostList posts={posts}/>:<div>Pots not exist</div> }
    </div>
 
    {totalPage && <Pagination totalPage={totalPage}/>}
    </main>
  )
}
