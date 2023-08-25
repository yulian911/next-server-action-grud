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

export async function getAllPost() {
  try {
    const posts =await Post.find()
   
  
    return {posts}
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