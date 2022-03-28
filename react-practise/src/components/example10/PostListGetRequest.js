import React, { useState, useEffect } from "react";
import axios from "axios";

const PostListGetRequest = () => {
  const [posts, setPost] = useState([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error Occured");
        setError(true);
      });
  }, []);

  return (
    <>
     
      {!Error &&  <div>******************** List of Posts ********************</div>}
      {Error && <div>******************** Error Occured ********************</div>}
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </>
  );
};

export default PostListGetRequest;
