import React from 'react';
import Vote from '../feed/Vote';
import Action from '../feed/Actions';
import Info from '../feed/Info';
import { useContext } from 'react';
import { RedditContext } from '../../context/RedditContext';
import { useRouter } from 'next/router';

const style = {
  wrapper: 'flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]',
  post: 'flex flex-col space-y-1 cursor-pointer',
  postTitle: 'text-lg font-medium text-[#D7DADC]',
  postContent: 'text-sm font-light text-[#D7DADC]/80',
};

const Post = ({
  id,
  title,
  author,
  content,
  created_at,
  upvotes,
  downvotes,
}) => {
  const router = useRouter();
  const { setSelectedPost } = useContext(RedditContext);

  const navigateToPost = () => {
    setSelectedPost({
      id,
      title,
      content,
      author,
      created_at,
      upvotes,
      downvotes,
    });
    router.push(`/post/${id}`);
  };

  return (
    <div className={style.wrapper}>
      <Vote upvotes={upvotes} downvotes={downvotes} />
      <div className={style.post} onClick={navigateToPost}>
        <Info author={author} />
        <h1 className={style.postTitle}>{title}</h1>
        <p className={style.postContent}>{content}</p>
        <Action />
      </div>
    </div>
  );
};

export default Post;
