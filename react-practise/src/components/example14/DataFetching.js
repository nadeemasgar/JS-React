import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const changeHandler = (e) => {
    setId(e.target.value);
  };

  const clickHandler = () => {
    setIdFromButtonClick(id);
  };

  return (
    <>
      <div>Data Fetching</div>
      <input type="text" value={id} onChange={changeHandler} />
      <button type="button" onClick={clickHandler}>
        Fetch Post
      </button>
     <div>{post.title}</div>
    </>
  );
}

export default DataFetching;
