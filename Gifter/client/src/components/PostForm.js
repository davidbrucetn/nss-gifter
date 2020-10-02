import React, { useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";

const PostForm = (props) => {
  const { addPost } = useContext(PostContext);

  //useState to determine if form is loading, so buttons will be disabled if true
  const [isLoading, setIsLoading] = useState(false);

  //useState for event (local to PostForm) that will update the named fields of the object
  const [newPost, setPost] = useState({
    title: "",
    caption: "",
    imageUrl: "",
    dateCreated: "",
    userProfileId: 0,
  });

  //update fields as needed by button onChange event
  const handleFieldChange = (evt) => {
    const stateToChange = { ...newPost };

    // React Input Number Type Isn't actually a number. This fixes it.
    stateToChange[evt.target.id] =
      evt.target.type === "number"
        ? parseInt(evt.target.value)
        : evt.target.value;

    setPost(stateToChange);
  };

  const cancelPost = (evt) => {
    props.history.push("/");
  };

  const constructNewPost = (evt) => {
    evt.preventDefault();
    let fieldCount = 0; // up to 5
    for (const [value] of Object.entries(newPost)) {
      if (value !== "") fieldCount++;
    }
    if (fieldCount < 5) {
      window.alert("Please input all form values.." + fieldCount);
    } else {
      setIsLoading(true);

      addPost(newPost);
    }
  };

  return (
    !isLoading && (
      <>
        <div className="div__container__form">
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="number"
                  required
                  onChange={handleFieldChange}
                  name="userProfileId"
                  id="userProfileId"
                  value={newPost.userProfileId}
                ></input>
                <label htmlFor="userProfileId">User Profile ID</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="title"
                  value={newPost.name}
                  placeholder="Post Title"
                />
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  name="caption"
                  id="caption"
                  value={newPost.caption}
                ></input>
                <label htmlFor="caption">Caption</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  name="imageUrl"
                  id="imageUrl"
                  value={newPost.imageUrl}
                ></input>
                <label htmlFor="imageUrl">Image Url</label>
                <input
                  type="date"
                  required
                  onChange={handleFieldChange}
                  name="dateCreated"
                  id="dateCreated"
                  value={newPost.dateCreated}
                ></input>
                <label htmlFor="dateCreated">Date Created</label>
              </div>
              <div className="div__task__buttons">
                <button
                  type="button"
                  className="btn"
                  disabled={isLoading}
                  onClick={constructNewPost}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  disabled={isLoading}
                  onClick={cancelPost}
                >
                  Nevermind
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    )
  );
};

export default PostForm;
