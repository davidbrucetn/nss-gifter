import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);
  let currLocation = "";
  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

  currLocation = useLocation();

  const RefreshScreen = (evt) => {
    history.push("/");
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <button type="button" className="btn" onClick={RefreshScreen}>
        Refresh Feed
      </button>

      <div className="container">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
