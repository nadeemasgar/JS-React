import React from "react";
import { UserConsumer } from "./useContext";

const ComponentC = () => {
  return (
    <UserConsumer>
      {
        (username) => {
           return <div>ComponentC {username}</div>
        }
      }
    </UserConsumer>
  );
};

export default ComponentC;
