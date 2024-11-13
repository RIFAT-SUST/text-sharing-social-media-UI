import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement  = useRef();
  const PostBodyElement  = useRef();
  const reactionsElement  = useRef();
  const tagsElement  = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value ;
    const postTitle = postTitleElement.current.value;
    const postBody = PostBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');
    addPost(userId,postTitle,postBody,reactions,tags);
  

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    PostBodyElement.current.value = " " ;
    reactionsElement.current.value = " ";
    tagsElement.current.value.split = " ";

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
         <h5> Enter Your User Id Here </h5>
        </label>
        <input
          type="text"
          ref={userIdElement }
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         <h5> Post Title </h5>
        </label>
        <input
          type="text"
          ref={postTitleElement }
          className="form-control"
          id="title"
          placeholder="How are you doing today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
         <h5> Post Content </h5>
        </label>
        <textarea
          rows="4"
          type="text"
          ref={PostBodyElement }
          className="form-control"
          id="body"
          placeholder="Share Your Througts."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
        <h5>Reactions</h5>
        </label>
        <input
          type="text"
          ref={reactionsElement }
          className="form-control"
          id="reactions"
          placeholder="Enter What is your Reaction about your post "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          <h5>Enter Your Hashtag here </h5>
        </label>
        <input
          type="text"
          ref={tagsElement }
          className="form-control"
          id="tags"
          placeholder="Please enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
