import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { UserContext } from "../providers/UserProvider";
import UserSelect from "./UserSelect";

const PostForm = (props) => {
  const { addPost } = useContext(PostContext);
  const { users, getAllUsers } = useContext(UserContext);

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
      evt.target.id === "userProfileId"
        ? parseInt(evt.target.value)
        : evt.target.value;
    console.log(evt.target.id);
    setPost(stateToChange);
  };

  const userSelect = users.map((user) => ({
    label: user.name,
    value: user.id,
  }));

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

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    !isLoading && (
      <>
        <div className="div__container__form--addPost">
          <h3>Add a Post</h3>
          <form>
            <fieldset>
              <div className="formgrid">
                {/* <UserSelect /> */}
                <select
                  id="userProfileId"
                  value={newPost.userProfileId}
                  onChange={handleFieldChange}
                >
                  {userSelect.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <label htmlFor="userProfileId">User Profile ID</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="title"
                  value={newPost.title}
                  placeholder="Title"
                />
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  name="caption"
                  id="caption"
                  placeholder="Caption"
                  value={newPost.caption}
                ></input>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image URL"
                  value={newPost.imageUrl}
                ></input>
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
              </div>
            </fieldset>
          </form>
        </div>
      </>
    )
  );
};

export default PostForm;
