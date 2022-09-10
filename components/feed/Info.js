import React from 'react';
import Image from 'next/image';

const style = {
  wrapper: 'flex items-center space-x-1 text-xs text-[#818384]',
  profilePicContainer: 'flex items-center space-x-1',
  profilePic: 'h-4 w-4 rounded-full',
  tag: 'cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline',
  postBy: 'flex items-center space-x-1',
};

const Info = ({ author }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <Image
          className={style.profilePic}
          width={30}
          height={30}
          src='https://jinwangdev.com/images/jin.gif'
          alt='logo'
        />
      </div>
      <div className={style.tag}>r/jinwangdev</div>
      <div>•</div>
      <div className={style.postBy}>
        <span>Posted by {author}</span>
        <span>•</span>
        <span>Jun 15</span>
      </div>
    </div>
  );
};

export default Info;
