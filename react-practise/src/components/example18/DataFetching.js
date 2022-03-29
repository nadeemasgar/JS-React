import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { post: action.payload, loading: false, error: "" };
    case "FETCH_FAILURE":
      return { post: {}, loading: false, error: "Something went wrong" };
    default:
      return state;
  }
};

function DataFetching() {
  const [currData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return (
    <div>
      {currData.loading ? "Loading" : currData.post.title}
      {currData.error ? currData.error : null}
    </div>
  );
}

export default DataFetching;
