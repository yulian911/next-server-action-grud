import { getAllPost } from '@/actions/postActions';
import PostList from '@/components/PostList';
import Pagination from '@/components/Pagination';
import SheetComponent from '@/components/SheetComponent';
import { getAuthSession } from '@/lib/nextauth';

export default async function Home({ params, searchParams }: any) {
  const { posts, totalPage, count } = await getAllPost(searchParams);
  const session = await getAuthSession();
  const postObject = JSON.parse(JSON.stringify(posts));
  const sessionObject = JSON.parse(JSON.stringify(session));

  return (
    <div className="flex flex-1  flex-col items-center justify-between px-24 py-6">
      <SheetComponent session={sessionObject} />

      <div className="gallery flex-1">
        {postObject ? <PostList posts={postObject} /> : <div>Pots not exist</div>}
      </div>

      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
}
