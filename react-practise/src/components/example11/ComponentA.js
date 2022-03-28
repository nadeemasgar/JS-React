import React, { useState, useEffect } from "react";
import axios from "axios";
import ComponentB from "./ComponentB";
import { UserProvider } from "./useContext";

const ComponentA = () => {
  const [posts, setPost] = useState([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error Occured");
        setError(true);
      });
  }, []);

  const obj = {
    globalPosts: posts,
    globalError: Error,
  };

  return (
    <UserProvider value={obj}>
      <ComponentB />
    </UserProvider>
  );
};

export default ComponentA;
