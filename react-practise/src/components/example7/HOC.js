import React from "react";

const HOC = (props) => {
  return <props.cmp {...props} />;
};

export default HOC;
