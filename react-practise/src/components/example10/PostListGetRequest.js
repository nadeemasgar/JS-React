import React, { useState, useEffect } from "react";
import axios from "axios";

const PostListGetRequest = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error Occured");
      });
  }, []);

  return (
    <>
      <div>******************** List of Posts ********************</div>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </>
  );
};

export default PostListGetRequest;
