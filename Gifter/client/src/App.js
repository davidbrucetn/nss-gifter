import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import { PostProvider } from "./providers/PostProvider";
import PostSearch from "./components/PostSearch";
import PostList from "./components/PostList";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <div className="div__forms__container--app">
          <UserProvider>
            <PostForm />
            <PostSearch />
          </UserProvider>
        </div>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
