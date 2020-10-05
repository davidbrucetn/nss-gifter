import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { UserContext } from "../providers/UserProvider";

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
    if (evt.target.id === "userProfileIdForm") {
      stateToChange["userProfileId"] = parseInt(evt.target.value);
    } else {
      stateToChange[evt.target.id] = evt.target.value;
    }

    console.log(evt.target.id);
    setPost(stateToChange);
  };

  const userSelect = users.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

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

      addPost(newPost).then((p) => {
        // Navigate the user back to the home route
        history.push("/");
      });
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
                  id="userProfileIdForm"
                  value={newPost.userProfileId}
                  onChange={handleFieldChange}
                >
                  <option key="0" value="0">
                    Search by User
                  </option>
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
