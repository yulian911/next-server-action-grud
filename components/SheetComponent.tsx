import React, { useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Plus } from 'lucide-react';
import PostForm from './PostForm';
import { getAuthSession } from '@/lib/nextauth';
import SignInButton from './SignInButton';

type Props = {};

const SheetComponent = async (props: Props) => {
  const session = await getAuthSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-2">
      <Sheet>
        <SheetTrigger className="bg-red-500 w-[60px] h-[60px] rounded-full flex justify-center items-center">
          <Plus size={50} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{session?.user ? 'Create' : 'Please Sign In'}</SheetTitle>
            <SheetDescription>
              {session?.user ? (
                <PostForm user={session?.user.id} open={open} setOpen={setOpen} />
              ) : (
                <SignInButton text={'Sign In'} />
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetComponent;
