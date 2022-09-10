import Post from '../common/Post';

//these will come from a database
// const posts = [
//   { id: 0, title: 'build reddit', author: 'ana' },
//   { id: 1, title: 'build medium', author: 'jin' },
//   { id: 2, title: 'build facebook', author: 'ping' },
// ];

const style = {
  wrapper: 'space-y-2.5',
};

const Feed = ({ posts }) => {
  return (
    <div className={style.wrapper}>
      {posts.map((post, id) => (
        <Post key={id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
