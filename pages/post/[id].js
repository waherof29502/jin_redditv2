import Post from '../../components/common/Post';
import { useContext, useEffect } from 'react';
import { RedditContext } from '../../context/RedditContext';
import Header from '../../components/header';
import { useRouter } from 'next/router';
import Comments from '../../components/commentSection/Comments';
import SaveComment from '../../components/commentSection/SaveComment';

const style = {
  wrapper: 'flex min-h-screen flex-col bg-black text-white',
  container: 'mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-[5rem] px-6',
  containerWrapper: 'w-full space-y-4 lg:w-2/3',
};

const PostView = () => {
  const router = useRouter();
  const { selectedPost } = useContext(RedditContext);

  useEffect(() => {
    if (selectedPost === null) {
      router.push('/');
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <div className={style.containerWrapper}>
          <Post {...selectedPost} />
          {/* SaveComment - add new comment */}
          <SaveComment postId={selectedPost.id} />
          {/* Comments - add new comment */}
          <Comments postId={selectedPost?.id} />
        </div>
      </div>
    </div>
  );
};

export default PostView;
