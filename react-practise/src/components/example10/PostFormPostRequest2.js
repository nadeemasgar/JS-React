// How to handle the value using the onChangeHandler and stored that value in the state => Problem Resolved
// How to reset the form using two-way Binding => Problem Pending

import React, { useState } from "react";
import axios from "axios";

const obj = { userId: "", title: "", body: "" };

function PostFormPostRequest2() {
  // const obj = { userId: "", title: "", body: "" }; => useMemo here else make it global so that it does not change in every re-render
  const [Object, setObject] = useState(obj);
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    // This component is re-render at every onChange event as you are updating the state inside it
    setObject((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsSubmit(true);

    console.log(Object);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", Object)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const arr = [1,2,3];

  // const fun = (val, index) => {
  //   console.log(val, index);
  // }

  // arr.map(fun)

  // Form -> state -> (UI) -> Post request = Ideal Case

  return (
    <>
      <div>
        ********************* PostFormPostRequest2 *********************
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            value={Object.userId}
            placeholder="userId"
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={Object.title}
            placeholder="title"
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={Object.body}
            placeholder="body"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmit && <div>{Object.userId}</div>}
      {isSubmit && <div>{Object.title}</div>}
      {isSubmit && <div>{Object.body}</div>}
    </>
  );
}

export default PostFormPostRequest2;
