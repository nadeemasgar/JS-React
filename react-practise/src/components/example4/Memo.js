import React from "react";

function Memo(props) {
  console.log("Memo Rendered");
  return <div>{props.name}</div>;
}

export default React.memo(Memo);
