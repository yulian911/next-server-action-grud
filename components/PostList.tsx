'use client';
import { experimental_useOptimistic as useOptimistic } from 'react';
import { Post } from '@/types/postType';
import PostCard from './PostCard';
import { deletePost } from '@/actions/postActions';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  const [optimisticPost, addOptimisticpost] = useOptimistic<Props>(
    { posts },
    // @ts-ignore
    (state: any, newPosts: string) => ({ ...state, posts: newPosts }),
  );

  const handleDelete = async (postId: string) => {
    if (window.confirm('Do you want to delete this post')) {
      const newPosts = posts.filter(post => post._id !== postId);
      addOptimisticpost((optimisticPost.posts = newPosts));
      await deletePost(postId);
    }
  };
  return (
    <div className="flex flex-1 gap-[20px] flex-wrap">
      {optimisticPost?.posts.map(post => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
