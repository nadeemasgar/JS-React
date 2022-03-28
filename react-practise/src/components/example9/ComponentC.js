import React from "react";
import { UserConsumer } from "./useContext";

const ComponentC = () => {
  return (
    <UserConsumer>
      {(obj) => {
        return (
          <div>
            ComponentC {obj.name} {obj.location}
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default ComponentC;
