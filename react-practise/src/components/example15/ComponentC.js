import React from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(name) => {
          return <div>Component C {name}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
