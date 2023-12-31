import { deletePost, getOnePost } from '@/actions/postActions';
import Modal from '@/components/Modal';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/postType';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: { postId: string };
  searchParams: any;
};

const PostDetails = async ({ params, searchParams }: Props) => {
  const { postId } = params;
  const { post } = await getOnePost(postId);
  const postObject = JSON.parse(JSON.stringify(post));
  return (
    <Modal>
      <div className="photo_container">
        <Image
          src={postObject.image}
          alt={postObject.title}
          className="w-[90%] h-[90%] object-contain"
          width={500}
          height={300}
          sizes="60vw"
          priority
        />
      </div>
    </Modal>
  );
};

export default PostDetails;
