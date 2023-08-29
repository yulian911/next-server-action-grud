'use server'
import connectDb from "@/lib/mongoDb"
import Post from '@/models/postModel'
import { revalidatePath } from "next/cache"

connectDb()

export async function createPost(data:{title:string,image:string}) {
  try {
    const newPost =new Post(data)
   
    await newPost.save()

    revalidatePath('/')

    return {...newPost._doc,_id:newPost._id.toString()}
  } catch (error:any) {
    throw new Error(error.message || 'Failed to create post');
    
  }
}

export async function getAllPost(searchParams:{search:string,sort:string,limit:any,page:any,skip:any}) {

  const search =searchParams?.search || ''
  const sort =searchParams?.sort || 'createdAt'
  const limit =searchParams?.limit * 1|| 7
  const page =searchParams?.page * 1|| 1
  const skip =searchParams?.skip * 1|| limit * (page - 1)



  try {
    const posts =await Post.find({title:{$regex:search}}).sort(sort).limit(limit).skip(skip)
    
    // if(posts) throw new Error("Posts error");
    
    
    const count =await Post.find({title:{$regex:search}}).count()
  
    const totalPage =Math.ceil(count/limit)

    const newData =posts.map(post =>(
      {
        ...post._doc,
        _id:post._doc._id.toString()
      }
    ))


    return {posts:newData,count,totalPage}
  } catch (error:any) {
    throw new Error(error.message || 'Failed to get all posts');
    
  }
}

export async function updatePost({title,image,id}:any) {
  try {
    
   
   const post= await Post.findByIdAndUpdate(id,{title,image},{new:true})

    revalidatePath('/')
    
    return {...post._doc,_id:post._id.toString()}
  } catch (error:any) {
    throw new Error(error.message || 'Failed to create post');
    
  }
}

export async function deletePost(postId:any) {
  try {
    
   
   const post= await Post.findByIdAndDelete(postId,{new:true})

    revalidatePath('/')
    
    return {...post._doc,_id:post._doc._id.toString()}
  } catch (error:any) {
    throw new Error(error.message || 'Failed to delete post');
    
  }
}

export async function getOnePost(postId:string) {
  try {
    const post =await Post.findById(postId)
   
  
    return {post}
  } catch (error:any) {
    throw new Error(error.message || 'Failed to get post');
    
  }
}
