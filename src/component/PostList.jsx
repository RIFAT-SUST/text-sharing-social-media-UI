import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-list-store";
import Post from "./Post";
import WelcomeMassage from "./welcomeMassage";

const PostList = () => {
  const { postList,addInitialPosts} = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
      addInitialPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMassage onGetPostsClick={handleGetPostsClick}></WelcomeMassage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
