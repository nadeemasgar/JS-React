// Why the state value is not changing

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const obj = { userId: "", title: "", body: "" };
function PostFormPostRequest() {
  const [Object, setObject] = useState(obj);
  const [isSubmit, setIsSubmit] = useState(false);

  const inputUserId = useRef("");
  const inputTitle = useRef("");
  const inputBody = useRef("");

  //   useEffect(() => {
  //     axios
  //       .post("https://jsonplaceholder.typicode.com/posts", Object)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [Object]);

  if (isSubmit) {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", Object) // Object has no value
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // setIsSubmit(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    const userData = {
      userId: inputUserId.current.value,
      title: inputTitle.current.value,
      body: inputBody.current.value,
    };

    setObject((prevState) => userData);

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", Object)  // Object has no value bcz of asynchronous
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    console.log(userData);

    inputUserId.current.value = "";
    inputTitle.current.value = "";
    inputBody.current.value = "";
  };

  return (
    <>
      <div>********************* PostFormPostRequest *********************</div>
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
        <div>{Object.userId}</div>
        <div>{Object.title}</div>
        <div>{Object.body}</div>
      </form>
    </>
  );
}

export default PostFormPostRequest;
