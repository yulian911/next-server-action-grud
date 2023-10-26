'use client';
import { createPost, updatePost } from '@/actions/postActions';
import { Post } from '@/types/postType';
import React, { useRef } from 'react';
import ButttonSubmit from './ButttonSubmit';
import { useAppContext } from '@/context/appContext';
import { Input } from '@/components/ui/input';

const wait = () => new Promise(resolve => setTimeout(resolve, 1000));

type Props = {
  user: string | undefined;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PostForm = ({ user, open, setOpen }: Props) => {
  const { editPost } = useAppContext();
  const formRef = useRef<any>(null);
  console.log(user);

  async function handleAction(formData: FormData) {
    const title = formData.get('title');
    const image = formData.get('image');

    if (editPost) {
      await updatePost({ title, image, id: editPost._id });
    } else {
      const data: any = { title, image, author: user };
      await createPost(data);
    }
    wait().then(() => setOpen(false));
    formRef.current?.reset();
  }
  return (
    <form ref={formRef} action={handleAction} className="flex flex-col gap-[20px] my-[30px] mx-0">
      <Input name="title" type="text" placeholder="title" required defaultValue={editPost?.title} />
      <Input name="image" type="text" placeholder="url" required defaultValue={editPost?.image} />

      {/* {editPost ?
      
      
      <ButttonSubmit value='Update'/>
      : */}
      <ButttonSubmit value="Create" />
      {/* } */}
    </form>
  );
};

export default PostForm;
