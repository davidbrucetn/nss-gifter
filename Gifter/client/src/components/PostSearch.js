import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../providers/PostProvider";
import PostList from "./PostList";
import UserSelect from "./UserSelect";

const PostSearch = (props) => {
  const { searchPosts } = useContext(PostContext);

  //useState to determine if form is loading, so buttons will be disabled if true
  const [isLoading, setIsLoading] = useState(false);

  //useState for event (local to PostForm) that will update the named fields of the object
  const [inputVal, setInputVal] = useState("");

  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

  const cancelSearch = (evt) => {
    history.push("/");
  };

  const checkSelect = () => {
    const selectBox = document.getElementById("userProfileId");
    return selectBox.value;
  };

  const searchThruPosts = (evt) => {
    evt.preventDefault();
    const userProfileId = checkSelect();
    if (inputVal === "") {
      window.alert("You must enter a Search Value");
    } else {
      setIsLoading(true);
      console.log(inputVal);
      searchPosts(inputVal, userProfileId);
    }
  };

  return (
    !isLoading && (
      <>
        <div className="div__container__form--searchPost">
          <h3>Find a Post</h3>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  onChange={(event) => setInputVal(event.target.value)}
                  id="searchField"
                  value={inputVal}
                  placeholder="Search Value"
                />
                <UserSelect />
              </div>
              <div className="div__task__buttons">
                <button
                  type="button"
                  className="btn"
                  disabled={isLoading}
                  onClick={searchThruPosts}
                >
                  Search Posts
                </button>
                <button
                  type="button"
                  className="btn"
                  disabled={isLoading}
                  onClick={cancelSearch}
                >
                  Cancel Search
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    )
  );
};

export default PostSearch;
