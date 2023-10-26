'use client'
import { likeThread } from '@/actions/postActions';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import { useRouter } from 'next/navigation';



const ButtonLike = ({post,author,likes,
  likedBy}:any) => {

      const router =useRouter()

  const addLike =async ()=>{
    try {
      await likeThread(post,author.id)
      // setCheck(likedBy.includes(author))
      router.refresh()

      
    } catch (error) {
      console.log(error)
    }
  }


 
  return (
    <>
       <Image
                  src={likedBy?.includes(author?.id)===true ? '/heart-filled.svg': '/heart-gray.svg'}
                  alt='heart'
                  width={24}
                  height={24}
                  className={cn(author?"cursor-pointer":null,'object-contain ')}
                  onClick={author&&addLike}
                />

    <span className='text-red-500'>{likes}</span>

    </>
  )
}

export default ButtonLike