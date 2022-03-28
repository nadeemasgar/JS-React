import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const obj = { userId: "", title: "", body: "" };

function PostFormPostRequest3() {
  const [Object, setObject] = useState(obj);

  const inputUserId = useRef("");
  const inputTitle = useRef("");
  const inputBody = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      userId: inputUserId.current.value,
      title: inputTitle.current.value,
      body: inputBody.current.value,
    };

    console.log(userData);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    inputUserId.current.value = "";
    inputTitle.current.value = "";
    inputBody.current.value = "";
  };

  return (
    <>
      <div>
        ********************* PostFormPostRequest3 *********************
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            ref={inputUserId}
            placeholder="userId"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            ref={inputTitle}
            placeholder="title"
          />
        </div>
        <div>
          <input type="text" name="body" ref={inputBody} placeholder="body" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PostFormPostRequest3;
